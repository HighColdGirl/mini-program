
<script>
  import request from './utils/request'
  export default {
    mounted(){
      wx.login({
        success: async (res) => {
          // 获取用户登录的临时凭证
          let code = res.code
          let result = await request('/getOpenId', {code})
          let openId = result.data
          // 存储到本地
          wx.setStorage({
            key: 'openId',
            data: openId
          })
        }
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" >
  page
    width 100%
    height 100%
</style>