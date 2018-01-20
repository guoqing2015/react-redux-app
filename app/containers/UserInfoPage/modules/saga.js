import { take, call, put, select, cancel, takeLatest, fork } from 'redux-saga/effects';
import { GET_NOTICE_LIST, UPDATE_NOTICE_STATUS } from './constants';
import { getNoticeListSuccess, getNoticeListError } from './actions';
import * as Api from './Api';
import {makeSelectUser} from '../../../redux/modules/Auth/modules/selectors';

export function* getNotice() {
  while (true) {
    yield take(GET_NOTICE_LIST);
    const user = yield select(makeSelectUser());
    const { response, error } = yield call(Api.getNoticeList, {
      channel_code: 1,
      history_id: null,
      status_code: null,
      cust_id: parseInt(user.id),
    });
    if (response && !error) {
      yield put(getNoticeListSuccess(response));
    } else {
      yield put(getNoticeListError(error));
    }
  }
}


export function* updateNotice() {
  while (true) {
    const { payload } = yield take(UPDATE_NOTICE_STATUS);
    const user = yield select(makeSelectUser());
    let param = {
      cust_id: parseInt(user.id),
      history_id: payload.id,
      status_code: 2,
      is_marked: 0   //
    }
    const { response, error } = yield call(Api.updateNoticeStatus, param);
  }
}

export default function* rootSaga() {
  yield fork(getNotice);
  yield fork(updateNotice);
}
