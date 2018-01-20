import axios from 'axios';
import { urls } from 'setting';


export const queryArea = (parentid) => {
  //var url = "http://api.sysstudio.com/api/base/getaddress?parentid=51"
  return axios.get(`${urls.QUERY_AREA_URL}?parentid=${parentid}`)
  //return axios.get(url)
    .then((response) => {
      if(response) {
        return {response}
      } else {
        return {error: response}
      }
    })
    .catch((error) => ({ error: {errmsg: '接口请求失败'} }));
};


