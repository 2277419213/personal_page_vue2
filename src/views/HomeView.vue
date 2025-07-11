<template>
  <div class="home-container">
    <!-- PC端布局：左侧个人信息，右侧手机展示 -->
    <div class="desktop-layout">
      <PersonalInfo class="personal-section" />
      <PhoneMockup class="phone-section" />
    </div>

    <!-- 移动端布局：只显示项目展示 -->
    <div class="mobile-layout">
      <MobileProjects />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import PersonalInfo from "@/components/PersonalInfo.vue";
import PhoneMockup from "@/components/PhoneMockup.vue";
import MobileProjects from "@/components/MobileProjects.vue";

export default Vue.extend({
  name: "HomeView",
  components: {
    PersonalInfo,
    PhoneMockup,
    MobileProjects,
  },
});
</script>

<style scoped>
.home-container {
  height: 100vh;
}

/* PC端布局 */
.desktop-layout {
  display: none;
}

@media (min-width: 768px) {
  .desktop-layout {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    min-height: 100vh;
    gap: 140px;
    max-width: 1800px;
    margin: 0 auto;
    padding: 20px;
  }

  .personal-section {
    flex: 2;
    max-width: 900px;
    min-width: 650px;
  }

  .phone-section {
    flex: 0 0 380px;
    position: sticky;
    top: 20px;
  }

  .mobile-layout {
    display: none;
  }
}

/* 移动端布局 */
@media (max-width: 767px) {
  .desktop-layout {
    display: none;
  }

  .mobile-layout {
    display: block;
  }
}
</style>
