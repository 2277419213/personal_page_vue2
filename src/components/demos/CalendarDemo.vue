<template>
  <div class="calendar-demo">
    <div class="demo-header">
      <h3>vue-calendar-h5</h3>
      <p>移动端日历组件</p>
    </div>

    <div class="demo-content">
      <!-- 原作者版本演示 -->
      <div class="calendardome">
        <h5>原作者版本(加了滑动切换)</h5>
        <H5Calendar lunar :touchthreshold="50" />
      </div>

      <!-- 纯展示版本 -->
      <div class="calendardome">
        <h5>纯展示版本</h5>
        <H5Calendar
          lunar
          :touchthreshold="50"
          :controllable="false"
          versions="juli"
          isshowtoday
        />
      </div>

      <!-- 功能介绍 -->
      <div class="feature-intro">
        <h4>组件特性</h4>
        <div class="feature-grid">
          <div class="feature-item">
            <span class="feature-icon">📆</span>
            <span>日期选择</span>
          </div>
          <div class="feature-item">
            <span class="feature-icon">🌙</span>
            <span>农历支持</span>
          </div>
          <div class="feature-item">
            <span class="feature-icon">👆</span>
            <span>滑动切换</span>
          </div>
          <div class="feature-item">
            <span class="feature-icon">📱</span>
            <span>移动优化</span>
          </div>
        </div>
      </div>

      <!-- 技术信息 -->
      <div class="tech-info">
        <h4>技术特点</h4>
        <div class="tech-list">
          <div class="tech-item">
            <strong>Vue.js 组件:</strong> 基于Vue.js开发的移动端日历组件
          </div>
          <div class="tech-item">
            <strong>农历支持:</strong> 完整的农历日期显示和转换功能
          </div>
          <div class="tech-item">
            <strong>触摸手势:</strong> 支持滑动切换月份，触摸阈值可配置
          </div>
          <div class="tech-item">
            <strong>灵活配置:</strong> 支持只读模式、今日标记等多种配置
          </div>
          <div class="tech-item">
            <strong>版本定制:</strong> 支持不同版本样式，如"juli"版本
          </div>
        </div>
      </div>

      <!-- 使用说明 -->
      <div class="operation-guide">
        <h4>使用说明</h4>
        <div class="guide-list">
          <div class="guide-item">
            <span class="step">1</span>
            <span>左右滑动切换月份</span>
          </div>
          <div class="guide-item">
            <span class="step">2</span>
            <span>点击日期进行选择</span>
          </div>
          <div class="guide-item">
            <span class="step">3</span>
            <span>支持农历日期显示</span>
          </div>
          <div class="guide-item">
            <span class="step">4</span>
            <span>可配置只读展示模式</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import H5Calendar from "vue-calendar-h5";

export default Vue.extend({
  name: "CalendarDemo",
  components: { H5Calendar },
});
</script>

<style scoped>
.calendar-demo {
  padding: 15px;
  height: 100%;
  overflow-y: auto;
  position: relative;
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
.calendardome {
  background: white;
  border-radius: 12px;
  /* padding: 15px 0; */
  padding-bottom: 15px;
  margin-bottom: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  box-sizing: border-box;
  position: relative;
  :deep(.calendar) {
    min-width: 100px;
  }
}

.calendardome h5 {
  color: #333;
  margin-bottom: 12px;
  font-size: 1rem;
  border-bottom: 2px solid #667eea;
  padding-bottom: 6px;
  padding: 15px;
}

.calendar-placeholder {
  background: linear-gradient(135deg, #f8f9ff, #e8ecff);
  border-radius: 12px;
  padding: 20px;
  text-align: center;
}

.demo-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.calendar-mock {
  background: white;
  border-radius: 8px;
  padding: 15px;
  margin: 15px 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.calendar-mock.readonly {
  opacity: 0.8;
}

.calendar-header-mock {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  margin-bottom: 15px;
}

.calendar-header-mock .nav-btn {
  background: #667eea;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.2rem;
  transition: all 0.2s ease;
}

.calendar-header-mock .nav-btn:hover {
  background: #5a6fd8;
  transform: scale(1.1);
}

.calendar-mock.readonly .nav-btn {
  display: none;
}

.month-year {
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
}

.calendar-grid-mock {
  width: 100%;
}

.weekday-header {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
  margin-bottom: 8px;
}

.weekday {
  background: #667eea;
  color: white;
  padding: 8px 4px;
  border-radius: 4px;
  font-size: 0.8rem;
  text-align: center;
  font-weight: 500;
}

.days-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
}

.day {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-size: 0.85rem;
  color: #666;
  cursor: pointer;
  transition: all 0.2s ease;
  margin: 0 auto;
}

.day:hover {
  background: #f0f2ff;
  color: #333;
}

.day.active {
  background: #667eea;
  color: white;
  font-weight: 600;
}

.day.today {
  background: #ff6b6b;
  color: white;
  font-weight: 600;
}

.day.today.active {
  background: #667eea;
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

/* 技术信息样式 */
.tech-info {
  background: white;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
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

/* 操作说明样式 */
.operation-guide {
  background: white;
  border-radius: 12px;
  padding: 20px;
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

/* 特别针对vue-calendar-h5组件的样式限制 */
:deep(.h5-calendar) {
  max-width: 100% !important;
  max-height: 100% !important;
  overflow: hidden !important;
}

:deep(.h5-calendar *) {
  max-width: 100% !important;
}

/* 确保日历的弹出层也被限制 */
:deep(.calendar-popup),
:deep(.calendar-modal) {
  position: absolute !important;
  max-width: 100% !important;
  max-height: 100% !important;
  left: 0 !important;
  top: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  z-index: 1 !important;
}
</style>
