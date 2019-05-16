//搭建服务器的（类似express）
let Koa = require('koa');
let KoaRouter = require('koa-router');

// 浏览器和React Native（发请求类ajax）
let Fly=require("flyio/src/node")
let fly=new Fly;

// 生成应用、生成路由器
const app = new Koa();
const router = new KoaRouter();

router.get('/', (ctx, next) => {
  // 返回数据参数在body中
  ctx.body = '返回的内容';
});

let datas = require('./datas/data.json');
console.log(typeof datas);
router.get('/searchBooks', (ctx, next) => {
  // 1. 接收请求参数req
  let req = ctx.query.req;
  console.log('前端搜索的关键字: ', req);
  // 2. 处理请求数据，访问数据库调出相应的数据（发送请求给豆瓣，接收豆瓣返回的数据返回给前端）

  // 3. 返回处理数据（响应）
  ctx.body = datas;
})
//获取登录权限使用oppenId
router.get('/getOpenId', async (ctx, next) => {
  // 1. 获取请求参数
  let code = ctx.query.code;
  let appId = 'wx1e2ab26795fad429';
  let appSecret = '06cc56cffdb9f4f38ab6e6b929916ee8';

  let url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${appSecret}&js_code=${code}&grant_type=authorization_code`
  // 发送请求
  /*fly.get(url) // 返回值就是promise
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });*/
  let result = await fly.get(url) // 返回值就是promise
  console.log(typeof result.data);
  ctx.body = JSON.parse(result.data).openid;
})

app
  .use(router.routes()) // 声明使用路由
  .use(router.allowedMethods()) // 声明允许使用路由方法

app.listen('3000', () => {
  console.log('服务器启动成功');
  console.log('服务器地址: http://localhost:3000');
})
