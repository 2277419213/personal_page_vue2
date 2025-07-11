<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",
});
</script>

<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
}

#app {
  min-height: 100vh;
  padding: 0 !important;
}

/* 全局样式：确保所有组件都被限制在其容器内 */
.phone-screen * {
  box-sizing: border-box;
}

/* 温和的第三方组件限制 */
.phone-screen .h5-cropper,
.phone-screen .h5-calendar {
  max-width: 100%;
}

/* 防止水平溢出，但保持组件功能 */
.phone-screen {
  overflow-x: hidden;
}
</style>
