<!--
button组件标签上有getuserinfo事件（指定open-type为getUserInfo）可获取授权弹框，
一旦授权确定后将不会再调用getUserInfo，需要手动调用wx.getUserInfo（{success：（res）方法函数处理更新用户信息}）
-->

<template>
  <div id="personalContainer">
    <div class="header">
      <img class="avatar" :src="userInfo.avatarUrl?userInfo.avatarUrl:'/static/imgs/personal/personal.png'" alt="">
      <button @getuserinfo="handleGetUserInfo" open-type="getUserInfo" class="btn">{{userInfo.nickName?userInfo.nickName:'登录'}}</button>
    </div>
    <div class="cardList">
      <div @click="handleScan" class="card">
        <span>扫码看书</span>
        <span class="more"> > </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        userInfo: {}
      }
    },
    mounted(){
      wx.getUserInfo({
        success: (res) => {
          this.userInfo = res.userInfo
        }
      })
    },
    methods: {
      handleGetUserInfo(res){
        console.log(res);
        if(res.mp.detail.userInfo){
          this.userInfo = res.mp.detail.userInfo
        }
      },
      handleScan(){
        //调用扫码方法函数
        wx.scanCode({
          success: (res) => {
            console.log('扫码成功：', res);
            console.log('图书isbn码：', res.result); //9787010009148
          }
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #personalContainer
    .header
      padding 20rpx
      background #02a774
      .avatar
        width 100rpx
        height 100rpx
        border-radius 50rpx
        vertical-align middle
        margin 0 20rpx
      .btn
        display inline-block
        height 60rpx
        font-size 32rpx
        line-height 60rpx
        text-align center
        vertical-align middle
        background rgba(255,255,255,.6)

    .cardList
      .card
        width 90%
        height 60rpx
        padding 10rpx
        line-height 60rpx
        font-size 28rpx
        margin 0 auto
        border 1rpx solid #eee
        margin-top 20rpx
        .more
          float right
</style>
