import config from './config'
// 发送各种ajax请求
function request(url, data={},method='GET') {
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

/**
 * 封装请求函数步骤：
 * 1.定义请求函数传参（url，data={}，method）
 * 2.返回new Promise对象（（resolve，reject）=>{}）
 */
export default request;
