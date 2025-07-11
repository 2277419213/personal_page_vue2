<template>
  <div class="about-page">
    <div class="about-container">
      <div class="about-header">
        <h1>关于我</h1>
        <p>前端工程师 · Vue.js 组件开发者</p>
      </div>
      
      <div class="about-content">
        <section class="intro-section">
          <h2>个人简介</h2>
          <p>
            我是一名热爱前端开发的工程师，专注于Vue.js生态系统的开发。
            喜欢创造实用的组件和工具，让开发变得更加简单高效。
          </p>
        </section>
        
        <section class="projects-section">
          <h2>开源项目</h2>
          <div class="project-grid">
            <div class="project-card">
              <h3>vue-cropper-h5</h3>
              <p>移动端图片裁剪组件，支持手势操作、旋转、缩放等功能。</p>
              <div class="project-features">
                <span class="feature-tag">手势操作</span>
                <span class="feature-tag">图片旋转</span>
                <span class="feature-tag">实时预览</span>
              </div>
              <a href="https://github.com/2277419213/vue-cropper-h5" target="_blank" class="project-link">
                查看项目 →
              </a>
            </div>
            
            <div class="project-card">
              <h3>vue-calendar-h5</h3>
              <p>移动端日历组件，简洁易用，支持日期标记、范围选择等功能。</p>
              <div class="project-features">
                <span class="feature-tag">日期选择</span>
                <span class="feature-tag">标记功能</span>
                <span class="feature-tag">范围限制</span>
              </div>
              <a href="https://github.com/2277419213/vue-calendar-h5" target="_blank" class="project-link">
                查看项目 →
              </a>
            </div>
          </div>
        </section>
        
        <section class="tech-section">
          <h2>技术栈</h2>
          <div class="tech-grid">
            <div class="tech-category">
              <h3>前端框架</h3>
              <ul>
                <li>Vue.js 2/3</li>
                <li>React</li>
                <li>TypeScript</li>
              </ul>
            </div>
            <div class="tech-category">
              <h3>移动端</h3>
              <ul>
                <li>响应式设计</li>
                <li>Touch事件</li>
                <li>PWA</li>
              </ul>
            </div>
            <div class="tech-category">
              <h3>工具链</h3>
              <ul>
                <li>Vite</li>
                <li>Webpack</li>
                <li>ESLint</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section class="contact-section">
          <h2>联系我</h2>
          <div class="contact-info">
            <a href="https://github.com/2277419213" target="_blank" class="contact-item">
              <span class="contact-icon">🐙</span>
              <span>GitHub</span>
            </a>
          </div>
        </section>
      </div>
      
      <div class="back-home">
        <router-link to="/" class="back-btn">
          ← 返回首页
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AboutView'
})
</script>

<style scoped>
.about-page {
  min-height: 100vh;
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.about-container {
  max-width: 800px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.about-header {
  text-align: center;
  margin-bottom: 40px;
}

.about-header h1 {
  font-size: 3rem;
  margin-bottom: 10px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.about-header p {
  font-size: 1.2rem;
  color: #666;
}

.about-content section {
  margin-bottom: 40px;
}

.about-content h2 {
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: #333;
  border-bottom: 2px solid #667eea;
  padding-bottom: 10px;
}

.intro-section p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.project-card {
  background: linear-gradient(135deg, #f8f9ff, #e8ecff);
  border-radius: 15px;
  padding: 25px;
  border: 1px solid #e0e6ff;
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-card h3 {
  color: #667eea;
  margin-bottom: 10px;
  font-size: 1.3rem;
}

.project-card p {
  color: #666;
  line-height: 1.5;
  margin-bottom: 15px;
}

.project-features {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 15px;
}

.feature-tag {
  background: #667eea;
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
}

.project-link {
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s ease;
}

.project-link:hover {
  color: #764ba2;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.tech-category {
  background: linear-gradient(135deg, #f8f9ff, #e8ecff);
  border-radius: 10px;
  padding: 20px;
  border: 1px solid #e0e6ff;
}

.tech-category h3 {
  color: #667eea;
  margin-bottom: 15px;
  font-size: 1.1rem;
}

.tech-category ul {
  list-style: none;
  padding: 0;
}

.tech-category li {
  padding: 5px 0;
  color: #555;
  border-bottom: 1px solid #f0f0f0;
}

.tech-category li:last-child {
  border-bottom: none;
}

.contact-info {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px 25px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 600;
  transition: transform 0.2s ease;
}

.contact-item:hover {
  transform: translateY(-2px);
}

.contact-icon {
  font-size: 1.5rem;
}

.back-home {
  text-align: center;
  margin-top: 30px;
}

.back-btn {
  display: inline-block;
  padding: 12px 24px;
  background: rgba(255, 255, 255, 0.2);
  color: #333;
  text-decoration: none;
  border-radius: 25px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  font-weight: 600;
  transition: all 0.3s ease;
}

.back-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .about-container {
    padding: 20px;
  }
  
  .about-header h1 {
    font-size: 2rem;
  }
  
  .project-grid {
    grid-template-columns: 1fr;
  }
  
  .tech-grid {
    grid-template-columns: 1fr;
  }
  
  .contact-info {
    flex-direction: column;
    align-items: center;
  }
}
</style>
