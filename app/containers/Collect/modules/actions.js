import {
  QUERY_COLLECT,
  QUERY_COLLECT_SUCCESS,
  ADD_COLLECT,
  DELETE_COLLECT,
} from './constants';

export function queryCollect() {
  return {
    type: QUERY_COLLECT
  };
}

export function queryCollectSuccess(response) {
  return {
    type: QUERY_COLLECT_SUCCESS,
    response
  };
}

export function queryCollectError(error) {
  return {
    type: QUERY_COLLECT_ERROR,
    error
  };
}

export function addCollect(payload) {
  return {
    type: ADD_COLLECT,
    payload
  };
}

export function deleteCollect(payload) {
  return {
    type: DELETE_COLLECT,
    payload
  };
}


