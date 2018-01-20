import axios from 'axios';
import {urls} from 'setting';



export const getOpenid = (params) => {
  //const url = urls.ACCESS_TOKEN_URL + "?code="+params.code   ;
  return axios.post(urls.ACCESS_TOKEN_URL, params)
    .then((response) => {
      if (response) {
        return {response}
      } else {
        return {error: response}
      }
    })
    .catch((error) => ( {error: {errmsg: "获取openid失败"}} ));
};


export const getUserInfo = (params) => {
  return axios.post(urls.USER_INFO_URL, params)
    .then((response) => {
      if (response && response.errcode == 7001 && response.content) {
      //if (response) {
        return {response}
      } else { //未注册
        return {
          response: {
            content: {} //此处表示会员信息为空
          }
        }
      }
    })
    .catch((error) => ({error: {errmsg: "获取会员信息失败("+error.response.status+")"}}));
};


export const updateUserInfo = (params) => {
  console.log(JSON.stringify(params, 2, 2));
  return axios.post(urls.USER_INFO_UPDATE_URL, params)
    .then((response) => {
      if (response && response.errcode == 7001) {
        return {response}
      } else { //未注册
        return {error: response}
      }
    })
    .catch((error) => ({error: {errmsg: "更新会员信息失败("+error.response.status+")"}}));
};

