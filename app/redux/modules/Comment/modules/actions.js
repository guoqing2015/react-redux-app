import {
  QUERY_COMMENT,
  QUERY_COMMENT_SUCCESS,
  ADD_COMMENT,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_ERROR
} from './constants';

export function queryComment(payload) {
  return {
    type: QUERY_COMMENT,
    payload
  };
}

export function queryCommentSuccess(response) {
  return {
    type: QUERY_COMMENT_SUCCESS,
    response
  };
}

export function queryCommentError(error) {
  return {
    type: QUERY_COMMENT_ERROR,
    error
  };
}

export function addComment(payload) {
  return {
    type: ADD_COMMENT,
    payload
  };
}


export function addCommentSuccess(response) {
  return {
    type: ADD_COMMENT_SUCCESS,
    response
  };
}

export function addCommentError(error) {
  return {
    type: ADD_COMMENT_ERROR,
    error
  };
}
