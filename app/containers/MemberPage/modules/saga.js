import { take, call, put, select, cancel, takeLatest, fork } from 'redux-saga/effects';
import { LOGIN } from './constants';
import { loginSuccess, loginError } from './actions';
import * as Api from './Api';

/**
 * 获取验证码
 */
export function* loginWatch() {
  while (true) {
    const { payload } = yield take(LOGIN);
    const { response, error } = yield call(Api.login, payload);
    if (response && !error) {
      yield put(loginSuccess(response));
    } else {
      yield put(loginError(error));
    }
  }
}
export default function* rootSaga() {
  yield fork(loginWatch);
}
