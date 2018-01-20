import { take, call, put, select, cancel, takeLatest, fork } from 'redux-saga/effects';
import { QUERY_ADDRESS, UPDATE_ADDRESS } from './constants';
import { queryAddressSuccess, queryAddressError, updateAddressSuccess, updateAddressError } from './actions';
import * as Api from './Api';
import {makeSelectUser} from '../../../redux/modules/Auth/modules/selectors';

export function* getAddressSaga() {
  while (true) {
    yield take(QUERY_ADDRESS);
    const user = yield select(makeSelectUser());
    const { response, error } = yield call(Api.getAddress, {
      cust_id: parseInt(user.userid),
    });
    if (response && !error) {
      yield put(queryAddressSuccess(response));
    } else {
      yield put(queryAddressError(error));
    }
  }
}


export function* updateAddressSaga() {
  while (true) {
    const { payload } = yield take(UPDATE_ADDRESS);
    const { response, error } = yield call(Api.updateAddress, payload);
    if (response && !error) {
      yield put(updateAddressSuccess(response));
    } else {
      yield put(updateAddressError(error));
    }
  }
}

export default function* rootSaga() {
  yield fork(getAddressSaga);
  yield fork(updateAddressSaga);
}
