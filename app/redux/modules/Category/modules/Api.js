import axios from 'axios';
import {urls} from 'setting';

export const queryDict = (params) => {
  return axios.post(urls.QUERY_DICT, params)
    .then((response) => {
      if (response ) {
        return {response}
      } else {
        return {error: response}
      }
    })
    .catch((error) => ({error: {errmsg: error.response.status}}));
};


export const queryCategoryItem = (params) => {
  return axios.post(urls.QUERY_CATEGORY_ITEM, params)
    .then((response) => {
      if (response ) {
        return {response}
      } else {
        return {error: response}
      }
    })
    .catch((error) => ({error: {errmsg: error.response.status}}));
};

