import axios from 'axios';
import { urls } from 'setting';


export const getAddress = (param) => {
  return axios.post(urls.QUERY_ADDRESS, param)
    .then((response) => {
      if(response && response.errcode == 7001) {
        return {response}
      } else {
        return {error: response}
      }
    })
    .catch((error) => ({ error: {errmsg: '接口请求失败'} }));
};


export const updateAddress = (param) => {
  return axios.post(urls.UPDATE_ADDRESS, param)
    .then((response) => {
      if(response && !response.errcode) {
        return {response}
      } else {
        return {error: response}
      }
    })
    .catch((error) => ({ error: {errmsg: '接口请求失败'} }));
};


