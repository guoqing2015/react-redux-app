/**
 * Gets the repositories of the user from Github
 */

import { take, call, put, select, cancel, takeLatest, fork } from 'redux-saga/effects';
import { LOAD_SHOP_LIST, LOAD_SHOP_TYPES } from './constants';
import { loadShopListSuccess, loadShopListError, loadShopTypesSuccess } from './actions';

// import request from 'utils/request';
// import { makeSelectUsername } from 'containers/HomePage/selectors';
import * as Api from './Api';

/**
 * 获取店铺列表
 */
export function* getShops() {
  // Select username from store
  // const username = yield select(makeSelectUsername());
  // const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;
  while (true) {
    const { payload } = yield take(LOAD_SHOP_LIST);
    const { response, error } = yield call(Api.getShops, payload);
    if (response && !error) {
      yield put(loadShopListSuccess(response));
    } else {
      yield put(loadShopListError(error));
    }
  }
}


/**
 * 获取店铺类型
 */
export function* getShopTypes() {
  while (true) {
    yield take(LOAD_SHOP_TYPES);
    const { response, error } = yield call(Api.getShopTypes);
    if (response && !error) {
      yield put(loadShopTypesSuccess(response));
    }
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* rootSaga() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  // yield takeLatest(LOAD_SHOP_LIST, getShops);
  yield fork(getShops);
  yield fork(getShopTypes);
}
