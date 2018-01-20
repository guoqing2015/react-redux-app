import axios from 'axios';
import { urls } from 'setting';


export const loadList = (condition) => {
  console.log(JSON.stringify(condition, 2, 2));
  return axios.post(urls.PRACTICE_LIST_URL, condition)
    .then((response) => {
      if (response && response.errcode == 7001) {
        return {response}
      } else {
        return {error: response}
      }
    })
    .catch((error) => ({error: {errmsg: "获取练习记录列表失败("+error.response.status+")"}}));
};


