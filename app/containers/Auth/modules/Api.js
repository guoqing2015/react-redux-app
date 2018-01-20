import axios from 'axios';
import {urls} from 'setting';



export const getOpenid = (params) => {
  return axios.get(urls.ACCESS_TOKEN_URL, params)
    .then((response) => {
      if (response && response.openid) {
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
      if (response && response.errcode == 7001) {
        return {response}
      } else {
        return {error: response}
      }
    })
    .catch((error) => ({error: {errmsg: "获取会员信息失败("+error.response.status+")"}}));
};

