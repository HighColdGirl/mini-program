## mpvue简介
  1. 市面上用的最多的两个小程序框架，mpvue，wepy
  2. mpvue美团推出的，wepy腾讯
## mpvue特点
  1. 基于Vue.js开发
  2. 除了支持vue生命周期函数同时也支持小程序生命周期函数，不建议使用原生小程序生命周期函数
  3. mpvue支持Vuex但是对Vue-router支持不是太好
## mpvue文件分类
  1. app.vue ---> app.js + app.wxss
  2. app.$mount === App({}) ---> 挂载整个应用
  3. App.mpType = 'app' 声明当前组件代表整个应用
  4. 组件页面中的挂载： index.$mount === Page({}) --->挂载当前页面
##main.js固定格式
  1.（入口）import Vue from 'vue'
    import App from './app.vue'    
    关闭Vue中的提示
    Vue.config.productionTip = false    
    声明当前组件的类型是表示应用
    App.mpType = 'app'    
    生成当前应用的实例对象
    const app = new Vue(App)
    挂载当前的应用实例
    app.$mount()
    
  2.（一般页面）import Vue from 'vue'
    import Index from './index.vue'
    const index = new Vue(Index)
    index.$mount()
    
  3.（封装请求函数）function request(url, data={},method='GET') {
      return new Promise((resolve, reject) => {
        wx.request({
          url: config.host + url,
          data,
          method,
          success: (res) => {
            // 更新状态
            // res.data
            console.log(res);
            resolve(res)
          },
          fail: (error) => {
            reject(error)
          }
        })
      })
    }
