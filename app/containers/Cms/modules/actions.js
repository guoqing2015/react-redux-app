import {
  QUERY_CMS,
  QUERY_CMS_SUCCESS,
  QUERY_CMS_ERROR
} from './constants';

export function queryCms() {
  return {
    type: QUERY_CMS
  };
}

export function queryCmsSuccess(response) {
  return {
    type: QUERY_CMS_SUCCESS,
    response
  };
}

export function queryCmsError(error) {
  return {
    type: QUERY_CMS_ERROR,
    error
  };
}

