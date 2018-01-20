

import {
  INIT_LIST,
  LOAD_LIST,
  LOAD_LIST_SUCCESS,
  LOAD_LIST_ERROR,
} from './constants';


export function initList() {
  return {
    type: INIT_LIST,
  };
}

export function loadList(payload) {
  return {
    type: LOAD_LIST,
    payload,
  };
}

export function loadListSuccess(response) {
  return {
    type: LOAD_LIST_SUCCESS,
    response,
  };
}

export function loadListError(error) {
  return {
    type: LOAD_LIST_ERROR,
    error,
  };
}

