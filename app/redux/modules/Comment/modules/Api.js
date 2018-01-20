import axios from 'axios';
import {urls} from 'setting';

export const queryComment = (params) => {
  return axios.post(urls.QUERY_COMMENT_URL, params)
    .then((response) => {
      if (response && response.errcode == 7001) {
        return {response}
      } else {
        return {error: response}
      }
    })
    .catch((error) => ({error: {errmsg: "查询用户收藏记录接口失败("+error.response.status+")"}}));
};


export const addComment = (params) => {
  return axios.post(urls.ADD_COMMENT_URL, params)
    .then((response) => {
      if (response && response.errcode == 7001) {
        return {response}
      } else {
        return {error: response}
      }
    })
    .catch((error) => ({error: {errmsg: "网络请求失败("+error.response.status+")"}}));
};

