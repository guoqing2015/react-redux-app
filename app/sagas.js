import { takeLatest, takeEvery} from 'redux-saga';
import { fork } from 'redux-saga/effects';
import authSaga from 'redux/modules/Auth/modules/saga';
import collectSaga from 'redux/modules/Collect/modules/saga';
import cmsSaga from 'redux/modules/Cms/modules/saga';
import areaSaga from 'redux/modules/Area/modules/saga';
import categorySaga from 'redux/modules/Category/modules/saga';
import chartSaga from 'redux/modules/Chart/modules/saga';
import commentSaga from 'redux/modules/Comment/modules/saga';
import tradeSaga from 'redux/modules/Trade/modules/saga';


// 当action触发时，执行特定saga
export default function* rootSaga() {
  yield fork(authSaga);
  yield fork(collectSaga);
  yield fork(cmsSaga);
  yield fork(areaSaga);
  yield fork(categorySaga);
  yield fork(chartSaga);
  yield fork(commentSaga);
  yield fork(tradeSaga);
}

