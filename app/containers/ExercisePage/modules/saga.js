import { take, call, put, select, cancel, takeLatest, fork } from 'redux-saga/effects';
import { QUERY_DETAIL, BUILD_PRACTICE, SUBMIT_ANSWER } from './constants';
import { queryDetailSuccess, queryDetailError, submitAnswerSuccess, submitAnswerError, buildPracticeSuccess, buildPracticeError} from './actions';
import * as Api from './Api';

export function* queryDetailSaga() {
  while (true) {
    const {payload} = yield take(QUERY_DETAIL);
    const { response, error } = yield call(Api.queryDetail, payload );
    if (response && !error) {
      yield put(queryDetailSuccess(response));
    } else {
      yield put(queryDetailError(error));
    }
  }
}


export function* buildPracticeSaga() {
  while (true) {
    const {payload} = yield take(BUILD_PRACTICE);
    const { response, error } = yield call(Api.buildPractice, payload );
    if (response && !error) {
      yield put(buildPracticeSuccess(response));
    } else {
      yield put(buildPracticeError(error));
    }
  }
}


export function* submitAnswerSaga() {
  while (true) {
    const {payload} = yield take(SUBMIT_ANSWER);
    const { response, error } = yield call(Api.submitAnswer, payload );
    if (response && !error) {
      yield put(submitAnswerSuccess(response));
    } else {
      yield put(submitAnswerError(error));
    }
  }
}

export default function* rootSaga() {
  yield fork(queryDetailSaga);
  yield fork(buildPracticeSaga);
  yield fork(submitAnswerSaga);
}


