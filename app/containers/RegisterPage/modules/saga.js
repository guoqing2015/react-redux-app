import { take, call, put, select, cancel, takeLatest, fork } from 'redux-saga/effects';
import { REGISTER } from './constants';
import { registerSuccess, registerError } from './actions';

import * as Api from './Api';

/**
 * 获取验证码
 */
export function* registerWatch() {
  while (true) {
    const { payload } = yield take(REGISTER);
    const { response, error } = yield call(Api.register, payload);
    if (response && !error) {
      yield put(registerSuccess(response));
    } else {
      yield put(registerError(error));
    }
  }
}
export default function* rootSaga() {
  yield fork(registerWatch);
}
