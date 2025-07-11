<template>
  <div class="mobile-projects">
    <div class="header">
      <h1>我的Vue组件</h1>
      <p>移动端组件展示</p>
    </div>

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

    <div class="project-content">
      <component :is="currentProjectComponent" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CropperDemo from "./demos/CropperDemo.vue";
import CalendarDemo from "./demos/CalendarDemo.vue";

export default Vue.extend({
  name: "MobileProjects",
  components: {
    CropperDemo,
    CalendarDemo,
  },
  data() {
    return {
      projects: [
        { id: "cropper", name: "vue-cropper-h5", component: "CropperDemo" },
        { id: "calendar", name: "vue-calendar-h5", component: "CalendarDemo" },
      ],
      currentProject: "cropper",
    };
  },
  computed: {
    currentProjectComponent() {
      const project = this.projects.find((p) => p.id === this.currentProject);
      return project?.component || "CropperDemo";
    },
  },
  methods: {
    switchProject(projectId: string) {
      this.currentProject = projectId;
    },
  },
});
</script>

<style scoped>
.mobile-projects {
  min-height: 100vh;
  background: white;
  display: flex;
  flex-direction: column;
  position: relative;
}

.header {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 40px 20px 30px;
  text-align: center;
}

.header h1 {
  font-size: 2rem;
  margin-bottom: 10px;
}

.header p {
  opacity: 0.9;
  font-size: 1.1rem;
}

.project-tabs {
  display: flex;
  background: white;
  border-bottom: 1px solid #e0e0e0;
  padding: 0;
  position: sticky;
  top: 0;
  z-index: 1;
}

.tab-button {
  flex: 1;
  padding: 20px 15px;
  border: none;
  background: transparent;
  color: #666;
  font-size: 16px;
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
}

.tab-button:hover:not(.active) {
  background: #f8f9fa;
  color: #333;
}

.project-content {
  flex: 1;
  overflow: auto;
}
</style>
