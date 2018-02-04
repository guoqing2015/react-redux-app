import axios from 'axios';
import { urls } from 'setting';


export const queryDetail = (param) => {
  console.log(JSON.stringify(param));
  return axios.post(urls.PRACTICE_URL, param)
    .then((response) => {
      if(response && response.errcode == 7001) {
        return {response}
      } else {
        return {error: response}
      }
    })
    .catch((error) => ({error: {errmsg: "获取详情失败("+error.response.status+")"}}));
};


export const buildPractice = (param) => {
  console.log(JSON.stringify(param));
  return axios.post(urls.BUILD_PRACTICE_URL, param)
    .then((response) => {
      if(response && response.errcode == 7001) {
        return {response}
      } else {
        return {error: response}
      }
    })
    .catch((error) => ({error: {errmsg: "获取详情失败("+error.response.status+")"}}));
};


export const submitAnswer = (param) => {
  return axios.post(urls.PRACTICE_SUBMIT_URL, param)
    .then((response) => {
      if(response && response.errcode == 7001) {
        return {response}
      } else {
        return {error: response}
      }
    })
    .catch((error) => ({error: {errmsg: "获取详情失败("+error.response.status+")"}}));
};


export const querySubjectList = (param) => {
  return axios.post(urls.PRACTICE_SUMJECT_LIST_URL, param)
    .then((response) => {
      if(response && response.errcode == 7001) {
        return {response}
      } else {
        return {error: response}
      }
    })
    .catch((error) => ({error: {errmsg: "获取详情失败("+error.response.status+")"}}));
};
