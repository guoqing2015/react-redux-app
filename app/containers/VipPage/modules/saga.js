import { take, call, put, select, cancel, takeLatest, fork } from 'redux-saga/effects';
import { QUERY_TARIFF } from './constants';
import { queryTariffSuccess, queryTariffError } from './actions';
import {makeSelectUser} from '../../../redux/modules/Auth/modules/selectors';
import * as Api from './Api';

export function* queryTariffSaga() {
  while (true) {
    yield take(QUERY_TARIFF);
    const user = yield select(makeSelectUser());
    const { response, error } = yield call(Api.queryTariff, {
      userid: user.userid
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
