import { take, call, put, select, cancel, takeLatest, fork } from 'redux-saga/effects';
import { ADD_COLLECT, DELETE_COLLECT, QUERY_COLLECT  } from './constants';
import { queryCollectSuccess } from './actions';
import {makeSelectUser} from '../../Auth/modules/selectors';

import * as Api from './Api';

export function* queryCollectSaga() {
  while (true) {
    yield take(QUERY_COLLECT);
    const user = yield select(makeSelectUser());
    const { response, error } = yield call(Api.queryCollect, {
      userid: user.userid
    });
    if (response && !error) {
      yield put(queryCollectSuccess(response));
    } else {
      yield put(queryCollectError(error));
    }
  }
}

export function* toggleCollectSaga() {
  while (true) {
    const { payload } = yield take([ADD_COLLECT, DELETE_COLLECT]);
    const { response, error } = yield call(Api.toggleCollect, payload.param);
  }
}


export default function* rootSaga() {
  yield fork(queryCollectSaga);
  yield fork(toggleCollectSaga);
}
