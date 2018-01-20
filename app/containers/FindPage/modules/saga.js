import { take, call, put, select, cancel, takeLatest, fork } from 'redux-saga/effects';
import { GET_ADDLIST } from './constants';
import { queryAdlistSuccess, queryAdlistError} from './actions';
import * as Api from './Api';
// import {makeSelectUser} from '../../Auth/modules/selectors';

export function* getAdlist() {
  while (true) {
    yield take(GET_ADDLIST);
    const { response, error } = yield call(Api.getAdlist,
      {
        "pointid": "28f47ad2-88a8-11e7-9349-507b9de727e3" //广告锚点，固定值
      }
    );
    if (response && !error) {
      yield put(queryAdlistSuccess(response));
    } else {
      yield put(queryAdlistError(error));
    }
  }
}



export default function* rootSaga() {
  yield fork(getAdlist);

}
