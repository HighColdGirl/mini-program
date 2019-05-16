<!--
路由传参形式：（query）?传参形式带数据[问题传参数据有可能是JSON格式数据传参stringfyi，接参parse]
-->

<template>
  <div id="booksContainer">
    <swiper indicator-dots>
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
    <div id="listContainer">
      <div class="list_header">
        <span>全部商品</span>
        <span @click="toList(booksArr)" class="more"> > </span>
      </div>
      <ul class="list_content">
        <li @click="toDetail(item)" v-for="(item, index) in booksArr" :key="index">
          <img :src="item.image" alt="">
          <p>《{{item.title}}》</p>
          <p>{{item.author}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import booksList from './datas/data.json'
  console.log(typeof booksList);
  export default {
    data(){
      return {
        booksArr: []
      }
    },
    mounted(){
      this.booksArr = booksList
    },
    methods: {
      toList(booksArr){
        wx.navigateTo({
          url: '/pages/booksList/main?booksList=' + JSON.stringify(booksArr)
        })
      },
      toDetail(bookItem){
        console.log(typeof bookItem, bookItem);
        wx.navigateTo({
          url: '/pages/detail/main?bookItem=' + JSON.stringify(bookItem)
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #booksContainer
    swiper
      width 100%
      height 400rpx
      img
        width 100%
        height 100%
    #listContainer
      .list_header
        padding 10rpx
        span
          font-size 40rpx
          &.more
            float right
      .list_content
        display flex
        flex-wrap wrap
        li
          width 50%
          box-sizing border-box
          text-align center
          border-bottom 1rpx solid #eee
          &:nth-child(2n + 1)
            border-right 1rpx solid #eee
          img
            width 200rpx
            height 200rpx
            margin 20rpx 0
          p
            font-size 28rpx
            line-height 46rpx
</style>
