import {
  QUERY_DETAIL,
  QUERY_DETAIL_SUCCESS,
  QUERY_DETAIL_ERROR,
  SUBMIT_ANSWER,
  SUBMIT_ANSWER_SUCCESS,
  SUBMIT_ANSWER_ERROR,
  BUILD_PRACTICE,
  BUILD_PRACTICE_SUCCESS,
  BUILD_PRACTICE_ERROR,
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
  }
}

export function buildPractice(payload) {
  return {
    type: BUILD_PRACTICE,
    payload
  };
}

export function buildPracticeSuccess(response) {
  return {
    type: BUILD_PRACTICE_SUCCESS,
    response,
  };
}

export function buildPracticeError(error) {
  return {
    type: BUILD_PRACTICE_ERROR,
    error,
  };
}


export function submitAnswer(payload) {
  return {
    type: SUBMIT_ANSWER,
    payload
  };
}

export function submitAnswerSuccess(response) {
  return {
    type: SUBMIT_ANSWER_SUCCESS,
    response,
  };
}

export function submitAnswerError(error) {
  return {
    type: SUBMIT_ANSWER_ERROR,
    error,
  };
}
