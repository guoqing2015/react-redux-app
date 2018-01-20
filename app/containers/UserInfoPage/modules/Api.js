import axios from 'axios';
import { urls } from 'setting';


export const getNoticeList = (param) => {
  return axios.post(urls.SYS_MESSAGE, param)
    .then((response) => {
      if(response && response.history_info) {
        return {response}
      } else {
        return {error: response}
      }
    })
    .catch((error) => ({ error: {errmsg: '接口请求失败'} }));
};


export const updateNoticeStatus = (param) => {
  return axios.post(urls.UPDATE_SYS_MESSAGE_STATUS, param)
    .then((response) => {
      debugger;
      if(response && !response.errcode) {
        return {response}
      } else {
        return {error: response}
      }
    })
    .catch((error) => ({ error: {errmsg: '接口请求失败'} }));
};


