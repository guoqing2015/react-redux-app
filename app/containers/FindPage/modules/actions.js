

import {
  GET_ADDLIST,
  GET_ADDLIST_SUCCESS,
  GET_ADDLIST_ERROR,
} from './constants';

export function queryAdlist() {
  return {
    type: GET_ADDLIST,
  };
}

export function queryAdlistSuccess(response) {
  return {
    type: GET_ADDLIST_SUCCESS,
    response,
  };
}

export function queryAdlistError(error) {
  return {
    type: GET_ADDLIST_ERROR,
    error,
  };
}

