import { take, call, put, select, cancel, takeLatest, fork } from 'redux-saga/effects';
import {
  QUERY_PROVINCES,
  QUERY_CITYS,
  QUERY_COUNTY } from './constants';
import { queryProvincesSuccess, queryCitysSuccess, queryCountysSuccess} from './actions';
import * as Api from './Api';

export function* queryTariffSaga() {
  while (true) {
    const {type, payload} = yield take([
      QUERY_PROVINCES,
      QUERY_CITYS,
      QUERY_COUNTY
    ]);
    const { response, error } = yield call(Api.queryArea, payload);
    if (response && !error) {
      if (type == QUERY_PROVINCES) {
        yield put(queryProvincesSuccess(response));
      } else if (type == QUERY_CITYS) {
        yield put(queryCitysSuccess(response));
      } else if (type == QUERY_COUNTY) {
        yield put(queryCountysSuccess(response));
      }
    }

  }
}

export default function* rootSaga() {
  yield fork(queryTariffSaga);
}
