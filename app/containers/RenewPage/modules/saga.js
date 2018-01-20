import { take, call, put, select, cancel, takeLatest, fork } from 'redux-saga/effects';
import { QUERY_TARIFF } from './constants';
import { queryTariffSuccess, queryTariffError } from './actions';
import * as Api from './Api';

export function* queryTariffSaga() {
  while (true) {
    yield take(QUERY_TARIFF);
    const { response, error } = yield call(Api.queryTariff, {
      status: "1"
    });
    if (response && !error) {
      yield put(queryTariffSuccess(response));
    } else {
      yield put(queryTariffError(error));
    }
  }
}

export default function* rootSaga() {
  yield fork(queryTariffSaga);
}
