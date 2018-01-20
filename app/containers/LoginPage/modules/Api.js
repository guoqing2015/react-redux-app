import axios from 'axios';
import { urls } from 'setting';


export const login = (param) => {
  return axios.post(urls.LOGIN_URL, param)
    .then((response) => {
      if(response.errcode == 7001) {
        return {response};
      } else {
        return {error: response}
      }
    })
  .catch((error) => ({error: {errmsg: "登录失败("+error.response.status+")"}}));
};


