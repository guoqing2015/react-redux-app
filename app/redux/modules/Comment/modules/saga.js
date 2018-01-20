import { take, call, put, select, cancel, takeLatest, fork } from 'redux-saga/effects';
import { ADD_COMMENT, DELETE_COMMENT, QUERY_COMMENT  } from './constants';
import { queryCommentSuccess, queryCommentError, addCommentSuccess, addCommentError } from './actions';
import {makeSelectUser} from '../../Auth/modules/selectors';

import * as Api from './Api';

export function* queryCommentSaga() {
  while (true) {
    const {payload} = yield take(QUERY_COMMENT);
    const { response, error } = yield call(Api.queryComment, payload );
    if (response && !error) {
      yield put(queryCommentSuccess(response));
    } else {
      yield put(queryCommentError(error));
    }
  }
}

export function* addCommentSaga() {
  while (true) {
    const { payload } = yield take(ADD_COMMENT);
    const { response, error } = yield call(Api.addComment, payload);
    if (response && !error) {
      yield put(addCommentSuccess(response));
    } else {
      yield put(addCommentError(error));
    }
  }
}


export default function* rootSaga() {
  yield fork(queryCommentSaga);
  yield fork(addCommentSaga);
}
