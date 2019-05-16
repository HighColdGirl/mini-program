import Vue from 'vue'
import App from './app.vue'

// 关闭Vue中的提示
Vue.config.productionTip = false

// 声明当前组件的类型是表示应用
App.mpType = 'app'

// 生成当前应用的实例对象
const app = new Vue(App)

// 挂载当前的应用实例
app.$mount()