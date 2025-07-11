<template>
  <div class="personal-info">
    <div class="avatar-section">
      <div class="avatar">
        <img :src="avatarImg" alt="居里栈栈" @error="handleImageError" />
      </div>
      <div class="name-title">
        <h1>居里栈栈</h1>
        <p class="title">前端工程师</p>
      </div>
    </div>

    <div class="intro-section">
      <h2>关于我</h2>
      <p class="intro-text">
        热爱前端开发的工程师，专注于Vue.js生态系统。
        致力于开发实用的移动端组件，让开发更简单高效。
      </p>
    </div>

    <div class="skills-section">
      <h2>技能栈</h2>
      <div class="skills-grid">
        <div class="skill-item" v-for="skill in skills" :key="skill.name">
          <div class="skill-icon">{{ skill.icon }}</div>
          <span>{{ skill.name }}</span>
        </div>
      </div>
    </div>

    <div class="projects-section">
      <h2>我的项目</h2>
      <div class="project-list">
        <div
          class="project-item"
          v-for="project in projects"
          :key="project.name"
        >
          <div class="project-info">
            <h3>{{ project.name }}</h3>
            <p>{{ project.description }}</p>
            <a :href="project.github" target="_blank" class="github-link">
              <span class="github-icon">📦</span>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="contact-section">
      <h2>联系方式</h2>
      <div class="contact-links">
        <a
          href="https://github.com/2277419213"
          target="_blank"
          class="contact-link"
        >
          <span class="contact-icon">🐙</span>
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import logoImg from "@/assets/logo.gif";

export default Vue.extend({
  name: "PersonalInfo",
  data() {
    return {
      avatarImg: logoImg,
      skills: [
        { name: "Vue.js", icon: "💚" },
        { name: "TypeScript", icon: "🔷" },
        { name: "JavaScript", icon: "💛" },
        { name: "HTML5", icon: "🧡" },
        { name: "CSS3", icon: "💙" },
        { name: "Mobile Dev", icon: "📱" },
      ],
      projects: [
        {
          name: "vue-cropper-h5",
          description: "移动端图片裁剪组件，支持手势操作",
          github: "https://github.com/2277419213/vue-cropper-h5",
        },
        {
          name: "vue-calendar-h5",
          description: "移动端日历组件，简洁易用",
          github: "https://github.com/2277419213/vue-calendar-h5",
        },
      ],
    };
  },
  methods: {
    handleImageError(event: Event) {
      const target = event.target as HTMLImageElement;
      target.src =
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjZjBmMGYwIi8+CjxjaXJjbGUgY3g9IjUwIiBjeT0iNDAiIHI9IjE1IiBmaWxsPSIjY2NjIi8+CjxwYXRoIGQ9Ik0yNSA3NWMwLTEzLjggMTEuMi0yNSAyNS0yNXMyNSAxMS4yIDI1IDI1IiBmaWxsPSIjY2NjIi8+Cjwvc3ZnPg==";
    },
  },
});
</script>

<style scoped>
.personal-info {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 25px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  color: #333;
  height: fit-content;
}

.avatar-section {
  text-align: center;
  margin-bottom: 18px;
}

.avatar {
  width: 100px;
  height: 100px;
  margin: 0 auto 15px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #667eea;
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.name-title h1 {
  font-size: 2.2rem;
  margin-bottom: 8px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.title {
  font-size: 1.2rem;
  color: #667eea;
  font-weight: 600;
  margin-bottom: 5px;
}

.subtitle {
  color: #666;
  font-size: 1rem;
}

.intro-section,
.skills-section,
.projects-section {
  margin-bottom: 18px;
}

.intro-section h2,
.skills-section h2,
.projects-section h2,
.contact-section h2 {
  font-size: 1.3rem;
  margin-bottom: 10px;
  color: #333;
  border-bottom: 2px solid #667eea;
  padding-bottom: 4px;
}

.intro-text {
  line-height: 1.6;
  color: #555;
  font-size: 1.1rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.skill-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: linear-gradient(135deg, #f8f9ff, #e8ecff);
  border-radius: 10px;
  border: 1px solid #e0e6ff;
  transition: transform 0.2s ease;
  font-size: 0.9rem;
}

.skill-item:hover {
  transform: translateY(-2px);
}

.skill-icon {
  font-size: 1.3rem;
}

.project-list {
  display: flex;
  gap: 15px;
}

.project-item {
  flex: 1;
  padding: 16px;
  background: linear-gradient(135deg, #f8f9ff, #e8ecff);
  border-radius: 15px;
  border: 1px solid #e0e6ff;
  transition: transform 0.2s ease;
}

.project-item:hover {
  transform: translateY(-2px);
}

.project-info h3 {
  color: #667eea;
  margin-bottom: 6px;
  font-size: 1.1rem;
}

.project-info p {
  color: #666;
  margin-bottom: 8px;
  line-height: 1.4;
  font-size: 0.95rem;
}

.github-link {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s ease;
}

.github-link:hover {
  color: #764ba2;
}

.contact-links {
  display: flex;
  gap: 15px;
}

.contact-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 600;
  transition: transform 0.2s ease;
}

.contact-link:hover {
  transform: translateY(-2px);
}

.contact-icon,
.github-icon {
  font-size: 1.2rem;
}
</style>
