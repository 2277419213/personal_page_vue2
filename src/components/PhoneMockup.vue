<template>
  <div class="phone-mockup">
    <div class="phone-frame">
      <!-- 手机顶部 -->
      <div class="phone-top">
        <div class="notch"></div>
      </div>

      <!-- 手机屏幕 -->
      <div class="phone-screen">
        <!-- 状态栏 -->
        <div class="status-bar">
          <div class="time-display">
            <span class="weekday">{{ currentWeekday }}</span>
            <span class="time-separator">·</span>
            <span class="time-part">{{ currentTime.hours }}</span>
            <span class="time-colon">:</span>
            <span class="time-part">{{ currentTime.minutes }}</span>
            <span class="time-colon">:</span>
            <div class="seconds-container">
              <div class="seconds-flip" :class="{ flipping: isFlipping }">
                <div class="seconds-current">{{ currentTime.seconds }}</div>
                <div class="seconds-next">{{ nextSecond }}</div>
              </div>
            </div>
          </div>
          <div class="status-icons">
            <span class="signal">📶</span>
            <span class="wifi">📶</span>
            <span class="battery">🔋</span>
          </div>
        </div>

        <!-- 应用内容区域 -->
        <div class="app-content">
          <!-- 项目切换标签 -->
          <div class="project-tabs">
            <button
              v-for="project in projects"
              :key="project.id"
              :class="['tab-button', { active: currentProject === project.id }]"
              @click="switchProject(project.id)"
            >
              {{ project.name }}
            </button>
          </div>

          <!-- 项目展示区域 -->
          <div class="project-display">
            <component :is="currentProjectComponent" />
          </div>
        </div>
      </div>

      <!-- 手机底部 -->
      <div class="phone-bottom">
        <div class="home-indicator"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CropperDemo from "./demos/CropperDemo.vue";
import CalendarDemo from "./demos/CalendarDemo.vue";

export default Vue.extend({
  name: "PhoneMockup",
  components: {
    CropperDemo,
    CalendarDemo,
  },
  data() {
    return {
      projects: [
        { id: "cropper", name: "裁剪器", component: "CropperDemo" },
        { id: "calendar", name: "日历", component: "CalendarDemo" },
      ],
      currentProject: "cropper",
      currentTime: {
        hours: "00",
        minutes: "00",
        seconds: "00",
      },
      currentWeekday: "周一",
      nextSecond: "01",
      isFlipping: false,
      timeInterval: null as number | null,
    };
  },
  computed: {
    currentProjectComponent() {
      const project = this.projects.find((p) => p.id === this.currentProject);
      return project?.component || "CropperDemo";
    },
  },
  mounted() {
    this.updateTime();
    this.startTimeUpdate();
  },
  beforeDestroy() {
    if (this.timeInterval) {
      clearInterval(this.timeInterval);
    }
  },
  methods: {
    switchProject(projectId: string) {
      this.currentProject = projectId;
    },
    updateTime() {
      const now = new Date();
      const weekdays = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];

      this.currentWeekday = weekdays[now.getDay()];

      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");

      // 计算下一秒
      const nextSecondNum = (now.getSeconds() + 1) % 60;
      this.nextSecond = nextSecondNum.toString().padStart(2, "0");

      // 如果秒数发生变化，触发翻动效果
      if (this.currentTime.seconds !== seconds) {
        this.triggerFlip();
      }

      this.currentTime = {
        hours,
        minutes,
        seconds,
      };
    },
    triggerFlip() {
      this.isFlipping = true;
      setTimeout(() => {
        this.isFlipping = false;
      }, 300); // 翻动动画持续400ms
    },
    startTimeUpdate() {
      this.timeInterval = setInterval(() => {
        this.updateTime();
      }, 1000) as any;
    },
  },
});
</script>

<style scoped>
.phone-mockup {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.phone-frame {
  width: 420px;
  height: 840px;
  background: linear-gradient(145deg, #2c3e50, #34495e);
  border-radius: 35px;
  padding: 8px;
  box-shadow: 0 0 0 3px #1a252f, 0 20px 40px rgba(0, 0, 0, 0.3),
    inset 0 3px 6px rgba(255, 255, 255, 0.1);
  position: relative;
}

.phone-top {
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.notch {
  width: 120px;
  height: 20px;
  background: #000;
  border-radius: 0 0 15px 15px;
}

.phone-screen {
  width: 100%;
  height: 780px;
  background: #000;
  border-radius: 25px;
  overflow: hidden;
  position: relative;
  /* 关键：确保这是一个强定位上下文，限制内部absolute元素 */
  z-index: 1;
  isolation: isolate;

  :deep(.calendar) {
    min-width: 100px;
  }

  :deep(.calendar-tools) {
    height: 30px !important;
  }
  :deep(.new-tools) {
    height: 30px !important;
    padding: 0 3px !important;
    font-size: 13px !important;
    line-height: 30px !important;
  }

  :deep(svg) {
    width: 30px !important;
    height: 30px !important;
  }
}

.status-bar {
  height: 50px;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
  color: white;
  font-size: 16px;
  font-weight: 600;
}

.time-display {
  display: flex;
  align-items: center;
  gap: 3px;
  font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 600;
  letter-spacing: -0.5px;
}

.weekday {
  font-size: 13px;
  opacity: 0.9;
  font-weight: 500;
}

.time-separator {
  opacity: 0.7;
  margin: 0 3px;
  font-size: 12px;
}

.time-part {
  font-size: 15px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
}

.time-colon {
  font-size: 15px;
  font-weight: 600;
  opacity: 0.9;
  animation: blink 2s infinite;
}

@keyframes blink {
  0%,
  50% {
    opacity: 0.9;
  }
  51%,
  100% {
    opacity: 0.4;
  }
}

.seconds-container {
  position: relative;
  width: 24px;
  height: 20px;
  overflow: hidden;
  perspective: 100px;
}

.seconds-flip {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.1);
}

.seconds-current,
.seconds-next {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
  backface-visibility: hidden;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.05);
  transition: all 0.2s ease;
}

.seconds-current {
  transform: rotateX(0deg);
  z-index: 2;
}

.seconds-next {
  transform: rotateX(-90deg);
  transform-origin: center bottom;
  z-index: 1;
}

.seconds-flip.flipping .seconds-current {
  animation: flipOut 0.2s cubic-bezier(0.4, 0, 0.6, 1) forwards;
}

.seconds-flip.flipping .seconds-next {
  animation: flipIn 0.2s cubic-bezier(0.4, 0, 0.6, 1) 0.2s forwards;
}

@keyframes flipOut {
  0% {
    transform: rotateX(0deg);
    opacity: 1;
  }
  100% {
    transform: rotateX(90deg);
    opacity: 0;
  }
}

@keyframes flipIn {
  0% {
    transform: rotateX(-90deg);
    opacity: 0;
  }
  100% {
    transform: rotateX(0deg);
    opacity: 1;
  }
}

/* 添加一个微妙的发光效果 */
.seconds-flip.flipping {
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.3);
}

.status-icons {
  display: flex;
  gap: 5px;
}

.app-content {
  height: calc(100% - 50px);
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  position: relative;
}

.project-tabs {
  display: flex;
  background: white;
  border-bottom: 1px solid #e0e0e0;
  padding: 0;
}

.tab-button {
  flex: 1;
  padding: 18px 12px;
  border: none;
  background: transparent;
  color: #666;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.tab-button.active {
  color: #667eea;
  font-weight: 600;
}

.tab-button.active::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 3px 3px 0 0;
}

.tab-button:hover:not(.active) {
  background: #f8f9fa;
  color: #333;
}

.project-display {
  flex: 1;
  overflow: hidden;
  background: white;
  position: relative;
  /* 确保所有子元素都被限制在手机屏幕内 */
  /* 创建新的层叠上下文，限制绝对定位元素 */
  isolation: isolate;
  width: calc(100% + 15px);
}

/* 温和的容器限制，保持组件功能 */
.project-display :deep(.cropper-modal) {
  /* 只限制可能的模态框 */
  max-width: 100%;
  max-height: 100%;
}

/* 确保组件内容不会水平溢出 */
.project-display :deep(.h5-cropper),
.project-display :deep(.h5-calendar) {
  max-width: 100%;
  box-sizing: border-box;
}

/* 关键修复：通过强化定位上下文来限制.bg元素 */
.project-display {
  /* 强化定位上下文 */
  position: relative;
  z-index: 1;
  /* 创建新的层叠上下文，限制内部绝对定位元素 */
  isolation: isolate;
  /* 防止内容溢出 */
  overflow: hidden;
}

/* 限制.bg元素，但不改变其position属性 */
.project-display :deep(.bg) {
  /* 通过clip-path或transform来限制显示区域 */
  max-width: 100% !important;
  max-height: 100% !important;
  /* 确保不会超出容器边界 */
  clip: rect(0, 100%, 100%, 0) !important;
}

/* 确保vue-cropper组件本身也被限制 */
.project-display :deep(.vue-cropper) {
  max-width: 100% !important;
  max-height: 100% !important;
  overflow: hidden !important;
}

.phone-bottom {
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.home-indicator {
  width: 120px;
  height: 4px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
}

/* 添加一些装饰性元素 */
.phone-frame::before {
  content: "";
  position: absolute;
  top: 80px;
  left: -3px;
  width: 6px;
  height: 40px;
  background: linear-gradient(145deg, #1a252f, #2c3e50);
  border-radius: 3px 0 0 3px;
}

.phone-frame::after {
  content: "";
  position: absolute;
  top: 120px;
  right: -3px;
  width: 6px;
  height: 80px;
  background: linear-gradient(145deg, #1a252f, #2c3e50);
  border-radius: 0 3px 3px 0;
}
</style>
