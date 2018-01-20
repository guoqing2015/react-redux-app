

import {
  GET_NOTICE_LIST,
  GET_NOTICE_LIST_SUCCESS,
  GET_NOTICE_LIST_ERROR,
  UPDATE_NOTICE_STATUS
} from './constants';

export function getNoticeList() {
  return {
    type: GET_NOTICE_LIST,
  };
}

export function getNoticeListSuccess(response) {
  return {
    type: GET_NOTICE_LIST_SUCCESS,
    response,
  };
}

export function getNoticeListError(error) {
  return {
    type: GET_NOTICE_LIST_ERROR,
    error,
  };
}


export function updateNoticeStatus(payload) {
  return {
    type: UPDATE_NOTICE_STATUS,
    payload,
  };
}