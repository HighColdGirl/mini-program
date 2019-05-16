<!--
button在vue小程序中是组件，参考文档配置，
swiper下必须是swiper-item
-->

<template>
  <div id="firstViewContainer">
    <swiper :indicator-dots="current !== 3" @change="handleChange">
      <swiper-item>
        <img src="/static/imgs/firstView/1.jpg" alt="">
      </swiper-item>
      <swiper-item>
        <img src="/static/imgs/firstView/2.jpg" alt="">
      </swiper-item>
      <swiper-item>
        <img src="/static/imgs/firstView/3.jpg" alt="">
      </swiper-item>
      <swiper-item>
        <img src="/static/imgs/firstView/nvsheng.jpg" alt="">
      </swiper-item>
    </swiper>
    <button @click="toBooks" class="btn" v-if="current === 3">开始体验</button>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        current: 0
      }
    },
    methods: {
      handleChange(event){
        //触发事件调用
        this.current = event.mp.detail.current
      },
      toBooks(){
        wx.navigateTo({
          url: '/pages/books/main'
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  #firstViewContainer
    height 100%
    width 100%

    swiper
      height 100%
      width 100%
      img
        width 100%
        height 100%

    .btn
      position absolute
      bottom 20rpx
      left 50%
      margin-left -140rpx
      width 280rpx
      height 80rpx
      line-height 80rpx
      text-align center
      font-size 30rpx
      background rgba(255,255,255, 0.5)
</style>
