import { take, call, put, select, cancel, takeLatest, fork } from 'redux-saga/effects';
import { QUERY_DETAIL } from './constants';
import { queryDetailSuccess, queryDetailError} from './actions';
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
export default function* rootSaga() {
  yield fork(queryDetailSaga);
}
