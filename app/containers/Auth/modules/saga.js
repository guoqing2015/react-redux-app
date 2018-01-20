import { take, call, put, select, cancel, takeLatest, fork } from 'redux-saga/effects';
import { GET_OPENID, GET_USER_INFO } from './constants';
import { getOpenidSuccess, getOpenidError, getUserInfoSuccess, getUserInfoError  } from './actions';

import * as Api from './Api';

/**
 * 获取openid
 */
export function* getOpenidSaga() {
  while (true) {
    const { payload } = yield take(GET_OPENID);
    const { response, error } = yield call(Api.getOpenid, payload);
    if (response && !error) {
      yield put(getOpenidSuccess(response));
    } else {
      yield put(getOpenidError(error));
    }
  }
}


/**
 * 获取会员信息
 */
export function* getUserInfoSaga() {
  while (true) {
    const { payload } = yield take(GET_USER_INFO);
    const { response, error } = yield call(Api.getUserInfo, payload);
    if (response && !error) {
      yield put(getUserInfoSuccess(response));
    } else {
      yield put(getUserInfoError(error));
    }
  }
}


export default function* rootSaga() {
  yield fork(getOpenidSaga);
  yield fork(getUserInfoSaga);
}
