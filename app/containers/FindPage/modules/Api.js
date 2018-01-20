import axios from 'axios';
import { urls } from 'setting';

//require('./test/mock');


export const getAdlist = (param) => {
  return axios.post(urls.ADLIST_URL, param)
    .then((response) => {
      if (response && response.errcode == 7001) {
        return {response}
      } else {
        return {error: response}
      }
    })
  .catch((error) => {
    return { error: {errmsg: '接口请求失败'} }
  });
};




