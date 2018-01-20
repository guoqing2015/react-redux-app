import axios from 'axios';
import { urls } from 'setting';


export const queryDetail = (param) => {
  console.log(JSON.stringify(param, 2, 2));
  return axios.post(urls.PRACTICE_DETAIL_URL, param)
    .then((response) => {
      if(response && response.errcode == 7001) {
        return {response}
      } else {
        return {error: response}
      }
    })
    .catch((error) => ({error: {errmsg: "获取详情失败("+error.response.status+")"}}));
};


