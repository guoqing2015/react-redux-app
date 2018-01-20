import axios from 'axios';
import { urls } from 'setting';


export const getNoticeList = (param) => {
  return axios.post(urls.NOTICE_LIST_URL, param)
    .then((response) => {
      if (response && response.errcode == 7001) {
        return {response}
      } else {
        return {error: response}
      }
    })
    .catch((error) => ({error: {errmsg: "获取消息列表失败("+error.response.status+")"}}));
};


export const updateNoticeStatus = (param) => {
  return axios.post(urls.UPEATE_NOTICE_URL, param)
    .then((response) => {
	    if (response && response.errcode == 7001) {
        return {response}
      } else {
        return {error: response}
      }
    })
    .catch((error) => ({ error: {errmsg: '接口请求失败'} }));
};


