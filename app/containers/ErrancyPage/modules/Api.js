
import axios from 'axios';
import { urls } from 'setting';


export const loadList = (condition) => {
  return axios.post(urls.ERRANCY_LIST_URL, condition)
    .then((response) => {
      if (response && response.errcode == 7001) {
        return {response}
      } else {
        return {error: response}
      }
    })
    .catch((error) => ({error: {errmsg: "获取列表失败("+error.response.status+")"}}));
};


