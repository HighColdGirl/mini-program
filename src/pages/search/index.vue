<!--
复用图书列表注册成子组件，
小程序中input被注册成组件，输入框确定事件confirm，应用数据双向绑定实时更新输入框内容，
小程序的input中可以定义标签样式（input-placeholder）
-->

<template>
  <div id="searchContainer">
    <div class="header">
      <input @confirm="handleConfirm" v-model="searchContent" type="text" placeholder="书中自有黄金屋">
      <span @click="clean" class="clean" v-show="searchContent"> X </span>
    </div>
    <!--列表展示-->
    <BooksList :booksList="booksList"/>
  </div>
</template>

<script>
  import BooksList from '../booksList/index.vue'
  import request from '../../utils/request'
  export default {
    components: {
      BooksList
    },
    data(){
      return {
        searchContent: '',
        booksList: []
      }
    },
    methods: {
      clean(){
        this.searchContent = ''
        this.booksList = []
      },
      async handleConfirm(){
        // 获取用户输入的关键字
        let searchContent = this.searchContent
        // 发送请求，更新图书列表（接口文档对应data请求参数）
        let result = await request('/searchBooks', {req: searchContent});
        this.booksList = result.data
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #searchContainer
    .header
      position relative
      input
        width 80%
        height 60rpx
        margin 20rpx auto
        border-bottom 1rpx solid #02a774
      .input-placeholder
        font-size 32rpx
        color #02a774
        text-align center
      .clean
        position absolute
        bottom 10rpx
        right 10%
        width 50rpx
        height 50rpx
        z-index 99
</style>
