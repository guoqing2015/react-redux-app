import axios from 'axios';
import { urls } from 'setting';


export const queryTariff = (param) => {
  return axios.post(urls.QUERY_TARIFF_URL, param)
    .then((response) => {
      if(response && response.errcode == 7001) {
        return {response}
      } else {
        return {error: response}
      }
    })
    .catch((error) => ({ error: {errmsg: '接口请求失败'} }));
};


