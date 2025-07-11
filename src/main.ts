import Vue from 'vue'
import { createPinia, PiniaVuePlugin } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

// 导入Vue组件
import VueCropper from 'vue-cropper-h5'
import VueCalendar from 'vue-calendar-h5'

Vue.use(PiniaVuePlugin)

// 注册全局组件
Vue.component('VueCropper', VueCropper)
Vue.component('VueCalendar', VueCalendar)

new Vue({
  router,
  pinia: createPinia(),
  render: (h) => h(App)
}).$mount('#app')
