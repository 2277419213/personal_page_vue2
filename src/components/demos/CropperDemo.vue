<template>
  <div class="cropper-demo">
    <div class="demo-header">
      <h3>vue-cropper-h5</h3>
      <p>移动端图片裁剪组件</p>
    </div>

    <div class="demo-content">
      <!-- 实际的vue-cropper-h5组件演示 -->
      <div class="dome">
        <div class="cropper">
          <img :src="img" class="img" />
          <!-- option是配置，格式是对象，getbase64Data是组件的一个方法获取裁剪完的头像 2.14新增一个获取getblobData的方法 -->
          <h5-cropper
            :option="option"
            @getbase64Data="getbase64Data"
            @getblobData="getblobData"
            @getFile="getFile"
          ></h5-cropper>
        </div>
        <div class="info">
          <div>作者：居里栈栈</div>
          <div>Wechat：812936565</div>
        </div>
      </div>

      <!-- 功能介绍 -->
      <div class="feature-intro">
        <h4>组件特性</h4>
        <div class="feature-grid">
          <div class="feature-item">
            <span class="feature-icon">✂️</span>
            <span>图片裁剪</span>
          </div>
          <div class="feature-item">
            <span class="feature-icon">🔄</span>
            <span>旋转缩放</span>
          </div>
          <div class="feature-item">
            <span class="feature-icon">👆</span>
            <span>手势操作</span>
          </div>
          <div class="feature-item">
            <span class="feature-icon">📱</span>
            <span>移动优化</span>
          </div>
        </div>
      </div>

      <!-- 操作说明 -->
      <div class="operation-guide">
        <h4>使用说明</h4>
        <div class="guide-list">
          <div class="guide-item">
            <span class="step">1</span>
            <span>点击头像区域选择图片</span>
          </div>
          <div class="guide-item">
            <span class="step">2</span>
            <span>拖拽调整裁剪区域</span>
          </div>
          <div class="guide-item">
            <span class="step">3</span>
            <span>双指缩放调整大小</span>
          </div>
          <div class="guide-item">
            <span class="step">4</span>
            <span>确认后获取裁剪结果</span>
          </div>
        </div>
      </div>

      <!-- 技术信息 -->
      <div class="tech-info">
        <h4>技术特点</h4>
        <div class="tech-list">
          <div class="tech-item">
            <strong>Vue.js 组件:</strong> 基于Vue.js开发的移动端裁剪组件
          </div>
          <div class="tech-item">
            <strong>触摸支持:</strong> 完美支持移动端触摸手势操作
          </div>
          <div class="tech-item">
            <strong>多格式输出:</strong> 支持base64、blob、file多种格式输出
          </div>
          <div class="tech-item">
            <strong>高性能:</strong> 优化的渲染性能，流畅的操作体验
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import H5Cropper from "vue-cropper-h5";
import logoImg from "@/assets/logo.gif";

export default Vue.extend({
  name: "CropperDemo",
  components: { H5Cropper },
  data() {
    return {
      option: {},
      img: logoImg,
    };
  },
  mounted() {
    // 在PC模式下，动态调整裁剪器的背景层限制
    this.adjustCropperForPhoneScreen();
    window.addEventListener("resize", () => this.adjustCropperForPhoneScreen());
  },
  beforeDestroy() {
    window.removeEventListener("resize", () =>
      this.adjustCropperForPhoneScreen()
    );
  },
  methods: {
    getbase64Data(data: string) {
      this.img = data;
    },
    getblobData(data: Blob) {
      console.log("获取到blob数据:", data);
    },
    getFile(data: File) {
      console.log("获取到文件:", data);
    },
    adjustCropperForPhoneScreen() {
      // 检查是否在PC模式下（通过检查是否存在手机模型容器）
      const phoneScreen = document.querySelector(".phone-screen");
      if (phoneScreen) {
        const appContent = document.querySelector(".app-content");
        const appContentObj = appContent?.getBoundingClientRect();
        // 动态添加样式来限制裁剪器背景层
        const style = document.createElement("style");
        style.textContent = `
          .phone-screen .bg {
            top: ${appContentObj?.top}px !important;
            left: ${appContentObj?.left}px !important;
            width: ${appContentObj?.width}px !important;
            height: ${appContentObj?.height}px !important;
          }
          .phone-screen .wrapper{
            height: calc(100% - 50px);
            padding: 15px;
          }
          .phone-screen .btndiv {
            height: 50px;
            padding: 0 15px;
            line-height: 50px;
            font-size: 15px;
          }
          .phone-screen .btn {
            height: 30px;
            line-height: 30px;
            font-size: 15px;
            padding: 0 14px;
            border-radius: 6px;
          }
          .phone-screen .btndiv .img {
            height: 30px;
            width: 30px;
            position: unset;
            left: 0;

          }
        `;
        document.head.appendChild(style);
      }
    },
  },
});
</script>

<style scoped>
.cropper-demo {
  padding: 15px;
  height: 100%;
  overflow-y: auto;
  position: relative;
  /* 确保组件不会超出父容器 */
  max-width: 100%;
  box-sizing: border-box;
}

.demo-header {
  text-align: center;
  margin-bottom: 20px;
}

.demo-header h3 {
  color: #333;
  margin-bottom: 5px;
  font-size: 1.5rem;
}

.demo-header p {
  color: #666;
  font-size: 14px;
}

/* 原作者的样式 */
.dome {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background: white;
  border-radius: 12px;
  margin-bottom: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  max-width: 100%;
  box-sizing: border-box;
}

.cropper {
  width: 60px;
  height: 60px;
  line-height: 60px;
  /* 切记position: relative一定要有 */
  position: relative;
  border-radius: 60px;
  overflow: hidden;
  text-align: center;
  flex-shrink: 0;
}

.img {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}

.info {
  font-size: 14px;
  height: 40px;
  line-height: 18px;
  margin-left: 15px;
  flex: 1;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0; /* 防止文字溢出 */
}

.info div {
  margin-bottom: 3px;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* 功能介绍样式 */
.feature-intro {
  background: white;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.feature-intro h4 {
  color: #333;
  margin-bottom: 15px;
  font-size: 1.2rem;
  border-bottom: 2px solid #667eea;
  padding-bottom: 8px;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px;
  background: linear-gradient(135deg, #f8f9ff, #e8ecff);
  border-radius: 8px;
  font-size: 0.9rem;
  color: #555;
  transition: all 0.3s ease;
}

.feature-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.2);
}

.feature-icon {
  font-size: 1.2rem;
}

/* 操作说明样式 */
.operation-guide {
  background: white;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.operation-guide h4 {
  color: #333;
  margin-bottom: 15px;
  font-size: 1.2rem;
  border-bottom: 2px solid #667eea;
  padding-bottom: 8px;
}

.guide-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.guide-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: #f8f9fa;
  border-radius: 8px;
  font-size: 0.9rem;
  color: #555;
}

.step {
  background: #667eea;
  color: white;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 600;
  flex-shrink: 0;
}

/* 技术信息样式 */
.tech-info {
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.tech-info h4 {
  color: #333;
  margin-bottom: 15px;
  font-size: 1.2rem;
  border-bottom: 2px solid #667eea;
  padding-bottom: 8px;
}

.tech-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.tech-item {
  padding: 12px;
  background: linear-gradient(135deg, #f8f9ff, #e8ecff);
  border-radius: 8px;
  font-size: 0.9rem;
  color: #555;
  line-height: 1.5;
}

.tech-item strong {
  color: #667eea;
  font-weight: 600;
}
</style>
