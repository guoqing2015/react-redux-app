
import { take, call, put, select, cancel, takeLatest, fork } from 'redux-saga/effects';
import { LOAD_LIST } from './constants';
import { loadListSuccess, loadListError } from './actions';

import * as Api from './Api';

/**
 * 获取列表
 */
export function* loadListSaga() {
  while (true) {
    const { payload } = yield take(LOAD_LIST);
    const { response, error } = yield call(Api.loadList, payload);
    if (response && !error) {
      yield put(loadListSuccess(response));
    } else {
      yield put(loadListError(error));
    }
  }
}

export default function* rootSaga() {
  yield fork(loadListSaga);
}
