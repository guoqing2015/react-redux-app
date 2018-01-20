import axios from 'axios';
import {urls} from 'setting';

export const queryCollect = (params) => {
  return axios.post(urls.QUERY_COLLECT_URL, params)
    .then((response) => {
      if (response && response.errcode == 7001) {
        return {response}
      } else {
        return {error: response}
      }
    })
    .catch((error) => ({error: {errmsg: "查询用户收藏记录接口失败("+error.response.status+")"}}));
};


export const toggleCollect = (params) => {
  return axios.post(urls.TOGGLE_COLLECT_URL, params)
    .then((response) => {
      if (response && response.errcode == 7001) {
        return {response}
      } else {
        return {error: response}
      }
    })
    .catch((error) => ({error: {errmsg: "网络请求失败("+error.response.status+")"}}));
};

