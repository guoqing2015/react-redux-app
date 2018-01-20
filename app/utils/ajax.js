import axios from 'axios'
import { app, urls } from '../setting'

axios.defaults.timeout = 20000;                        // 响应时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'           // 配置请求头
//axios.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8';           // 配置请求头
// axios.defaults.baseURL = '你的接口地址'   // 配置接口地址

// POST传参序列化(添加请求拦截器)
axios.interceptors.request.use( (config) =>{
  // 在发送请求之前做某件事
  return new Promise((resolve, reject) => {

    if (config.url.indexOf(urls.AUTHENTICATE_URL) === -1) {
      getToken(function (token) {
        config.headers['authorization'] = "token " + token;
        config.headers['Content-Type'] = "application/json; charset=utf-8";
        return resolve(config);
      })
    } else {
      return resolve(config);
    }
  })
}, (error) => {
  return Promise.reject(error);
})


// 返回状态判断(添加响应拦截器)
axios.interceptors.response.use( (res) =>{
// 对响应数据做些事
//   if(!res.data.success){
//     // _.toast(res.data.msg);
//     return Promise.reject(res);
//   }
  return res.data;
}, (error) =>{
  return Promise.reject(error);
});

/**
 * 获取token值
 * @param successCallback
 */
var getToken = function(successCallback) {
  var now = new Date().getTime()
  var token = localStorage.getItem("authInfo");
  if (token) {
    token = JSON.parse(token)
    if (!token.expireTime || now > token.expireTime) { // token 过期
      token = false
    }
  }
  if (token) {
    successCallback(token.token);
  } else {
    axios.get(`${urls.AUTHENTICATE_URL}/${app.appid}/${app.appsecret}`, {}, {
      headers: {
        "Content-Type": 'application/x-www-form-urlencoded'
      }
    }).then(function(token) {
      //TODO
      token = "123456789"
      if(token) {
        var authInfo = {
          token: token,
          time: new Date().getTime(),
          expireTime: now + 2 * 60 * 60 * 1000 //(data.expire - 100) * 1000// 过期时间 data.expire 的单位是秒
        }
        localStorage.setItem("authInfo", JSON.stringify(authInfo));
        successCallback(token);
      } else {
        //document.getElementById('app').innerHTML = '获取token失败';
      }
    }, function(err) {
      console.error("error occur when getToken " + err);
      //document.getElementById('app').innerHTML = '获取token失败,请稍后重试';
    })
  }
}

