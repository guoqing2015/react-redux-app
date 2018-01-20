import {
  QUERY_DETAIL,
  QUERY_DETAIL_SUCCESS,
  QUERY_DETAIL_ERROR,
} from './constants';

export function queryDetail(payload) {
  return {
    type: QUERY_DETAIL,
    payload
  };
}

export function queryDetailSuccess(response) {
  return {
    type: QUERY_DETAIL_SUCCESS,
    response,
  };
}

export function queryDetailError(error) {
  return {
    type: QUERY_DETAIL_ERROR,
    error,
  };
}

