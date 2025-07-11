# 个人主页 - Vue.js 移动端组件展示

这是一个响应式的个人主页项目，主要用于展示两个Vue.js移动端组件：`vue-cropper-h5` 和 `vue-calendar-h5`。

## 🚀 项目特色

### 📱 响应式设计
- **PC端布局**: 左侧个人信息，右侧手机模拟器展示移动端组件
- **移动端布局**: 直接展示项目组件，优化移动端体验

### 🛠️ 展示的组件

#### 1. vue-cropper-h5 - 移动端图片裁剪组件
- ✂️ 图片裁剪功能
- 🔄 旋转缩放操作
- 👆 触摸手势支持
- 📱 移动端优化
- 📤 多格式输出（base64、blob、file）

#### 2. vue-calendar-h5 - 移动端日历组件
- 📆 日期选择功能
- 🌙 农历支持
- 👆 滑动切换月份
- 📱 移动端优化
- 🎨 多版本样式支持
- 📍 只读模式配置

## 🔧 技术栈

- **Vue.js 2.7** - 渐进式JavaScript框架
- **TypeScript** - 类型安全的JavaScript超集
- **Vite** - 快速的前端构建工具
- **Vue Router** - Vue.js官方路由管理器
- **CSS3** - 现代CSS特性和响应式设计

## 📦 安装和运行

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

## 🎯 项目结构

```
src/
├── components/
│   ├── demos/
│   │   ├── CropperDemo.vue    # 图片裁剪组件演示
│   │   └── CalendarDemo.vue   # 日历组件演示
│   ├── PersonalInfo.vue       # 个人信息组件
│   ├── PhoneMockup.vue        # 手机模拟器组件
│   └── MobileProjects.vue     # 移动端项目展示
├── views/
│   └── HomeView.vue           # 主页视图
└── router/
    └── index.ts               # 路由配置
```

## 🌟 特性说明

### PC端体验
- 左侧展示个人信息和技能
- 右侧手机模拟器实时展示移动端组件
- 可以在手机框内切换不同的组件演示
- 响应式布局，适配不同屏幕尺寸

### 移动端体验
- 直接展示项目组件，无需模拟器
- 原生移动端交互体验
- 触摸手势完全支持
- 优化的移动端界面

## 📱 组件使用示例

### vue-cropper-h5 使用
```vue
<template>
  <div class="cropper">
    <img :src="img" class="img" />
    <h5-cropper
      :option="option"
      @getbase64Data="getbase64Data"
      @getblobData="getblobData"
      @getFile="getFile"
    ></h5-cropper>
  </div>
</template>

<script>
import H5Cropper from "vue-cropper-h5";

export default {
  components: { H5Cropper },
  data() {
    return {
      option: {},
      img: "your-image-url"
    }
  },
  methods: {
    getbase64Data(data) {
      this.img = data;
    }
  }
}
</script>
```

### vue-calendar-h5 使用
```vue
<template>
  <div>
    <!-- 原作者版本 -->
    <H5Calendar lunar :touchthreshold="50"/>

    <!-- 纯展示版本 -->
    <H5Calendar
      lunar
      :touchthreshold="50"
      :controllable="false"
      versions="juli"
      isshowtoday
    />
  </div>
</template>

<script>
import H5Calendar from "vue-calendar-h5";

export default {
  components: { H5Calendar }
}
</script>
```

## 🎨 设计理念

这个项目的设计理念是创建一个既能展示技术能力，又能提供良好用户体验的个人主页。通过响应式设计，确保在不同设备上都能获得最佳的展示效果。

## 📄 许可证

MIT License

## 👨‍💻 作者

居里栈栈
- GitHub: [2277419213](https://github.com/2277419213)
- WeChat: 812936565
