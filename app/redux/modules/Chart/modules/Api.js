import axios from 'axios';
import {urls} from 'setting';

export const examAnalysis = (params) => {
  return axios.post(urls.EXAM_ANALYSIS_URL, params )
    .then((response) => {
      if (response && response.errcode == 7001) {
        return {response}
      } else {
        return {error: response}
      }
    })
    .catch((error) => ({error: {errmsg: "请求失败(" + error.response.status + ")"}}));
};


export const practiceAnalysis = (params) => {
  return axios.post(urls.PRACTICE_ANALYSIS_URL, params )
    .then((response) => {
      if (response && response.errcode == 7001) {
        return {response}
      } else {
        return {error: response}
      }
    })
    .catch((error) => ({error: {errmsg: "请求失败(" + error.response.status + ")"}}));
};


