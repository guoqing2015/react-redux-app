import { take, call, put, select, cancel, takeLatest, fork, takeEvery } from 'redux-saga/effects';
import {
  QUERY_FIRST_CATEGORY,
  QUERY_SECOND_CATEGORY,
  QUERY_THIRD_CATEGORY,
  QUERY_FOURTH_CATEGORY


} from './constants';
import { queryFirstCategorySuccess, querySecondCategorySuccess, queryThirdCategorySuccess, queryFourthCategorySuccess } from './actions';
import * as Api from './Api';

export function* queryDictSaga({type, payload}) {
    const { response, error } = yield call(Api.queryDict, payload );
    if (response && !error) {
      if (type == QUERY_FIRST_CATEGORY) {
        yield put(queryFirstCategorySuccess(response));
      } else if (type == QUERY_SECOND_CATEGORY) {
        yield put(querySecondCategorySuccess(response));
      }
    }
  //}
}

export function* queryCategorySaga({type, payload}) {
  const { response, error } = yield call(Api.queryCategoryItem, payload );
  if (response && !error) {
    if (type == QUERY_THIRD_CATEGORY) {
      yield put(queryThirdCategorySuccess(response));
    } else if (type == QUERY_FOURTH_CATEGORY) {
      yield put(queryFourthCategorySuccess(response));
    }
  }
  //}
}

export default function* rootSaga() {
  yield takeEvery([QUERY_FIRST_CATEGORY, QUERY_SECOND_CATEGORY], queryDictSaga)
  yield takeEvery([QUERY_THIRD_CATEGORY, QUERY_FOURTH_CATEGORY], queryCategorySaga)
}
