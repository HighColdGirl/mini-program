<!--
图书列表数据通过路由参数传递过来的，读取方式this.$mp.query.xxx
-->

<template>
  <div id="listContainer">
    <ul>
      <li v-for="(item, index) in booksList" :key="index">
        <img :src="item.image" alt="">
        <div class="bookInfo">
          <p class="bookName">{{item.title}}</p>
          <p class="bookAuthor">{{item.author}}</p>
          <p class="bookPublisher">{{item.publisher}}</p>
        </div>
        <p class="bookPrice">{{item.price}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    //接收参数一般小程序onload中参数（options）就是路由传参，通过props属性接受
    props: ['booksList'],
  /* onLoad(options){
     console.log(options);
   }*/
    data(){
      return {
        booksList: []
      }
    },
    mounted(){
      console.log(this);
      //判断传入参数是否有参数（主要判断this中数据格式）
      if(this.$mp){
        this.booksList = JSON.parse(this.$mp.query.booksList)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #listContainer
    li
      display flex
      padding 10rpx
      border-bottom 1rpx solid #eee
      img
        width 140rpx
        height 140rpx
        margin-right 20rpx
      .bookInfo
        width 67%
        line-height 50rpx
        .bookName
          font-size 28rpx
        .bookAuthor
          font-size 32rpx
        .bookPublisher
          font-size 30rpx

      .bookPrice
        font-size 40rpx
        font-weight bold
        color red
</style>
