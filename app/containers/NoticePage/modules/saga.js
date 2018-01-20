import { take, call, put, select, cancel, takeLatest, fork } from 'redux-saga/effects';
import { GET_NOTICE_LIST, UPDATE_NOTICE_STATUS, DELETE_NOTICE_STATUS } from './constants';
import { getNoticeListSuccess, getNoticeListError } from './actions';
import * as Api from './Api';
import {makeSelectUser} from '../../../redux/modules/Auth/modules/selectors';

export function* getNoticeSaga() {
  while (true) {
    const {payload} = yield take(GET_NOTICE_LIST);
    //const user = yield select(makeSelectUser());
    const { response, error } = yield call(Api.getNoticeList,
      payload
    );
    if (response && !error) {
      yield put(getNoticeListSuccess(response));
    } else {
      yield put(getNoticeListError(error));
    }
  }
}


export function* updateNoticeSaga() {
  while (true) {
    const { payload, type } = yield take([UPDATE_NOTICE_STATUS, DELETE_NOTICE_STATUS]);
    let statusCode;
    if(type == UPDATE_NOTICE_STATUS) {
      statusCode = "01";
    } else if(type == DELETE_NOTICE_STATUS) {
      statusCode = "00";
    }
    // const user = yield select(makeSelectUser());
    let param = {
      // cust_id: parseInt(user.id),
      id: payload.id,
      status_code: statusCode, // 2 已读 3 删除

      // "operatetype":"00/01" //00:删除 01:已读
    }
    const { response, error } = yield call(Api.updateNoticeStatus, param);
  }
}

export default function* rootSaga() {
  yield fork(getNoticeSaga);
  yield fork(updateNoticeSaga);
}
