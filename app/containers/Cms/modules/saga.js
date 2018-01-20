import { take, call, put, select, cancel, takeLatest, fork } from 'redux-saga/effects';
import { QUERY_CMS } from './constants';
import { queryCmsSuccess, queryCmsError } from './actions';

import * as Api from './Api';

export function* queryCmsSaga() {
  while (true) {
    const {payload} = yield take(QUERY_CMS);
    const { response, error } = yield call(Api.queryCms, payload);
    if (response && !error) {
      yield put(queryCmsSuccess(response));
    } else {
      yield put(queryCmsError(error));
    }
  }
}

export default function* rootSaga() {
  yield fork(queryCmsSaga);
}
