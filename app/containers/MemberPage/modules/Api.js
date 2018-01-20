import axios from 'axios';
import { urls } from 'setting';


export const login = (param) => {
  return axios.post(urls.LOGIN, param)
    .then((response) => {
      if(response && response.cust_id) {
        return {response: response.cust_id};
      } else {
        return {error: response}
      }
    })
    .catch((error) => ({ error: {errmsg: '接口请求失败'} }));
};


