import axios from 'axios';
import {urls} from 'setting';

export const queryCms = (params) => {
  return axios.post(urls.CMS_LIST_URL, params )
    .then((response) => {
      if (response && response.errcode == 7001) {
        return {response}
      } else {
        return {error: response}
      }
    })
    .catch((error) => ({error: {errmsg: "请求失败(" + error.response.status + ")"}}));
};


