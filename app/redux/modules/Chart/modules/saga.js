import { take, call, put, select, cancel, takeLatest, fork } from 'redux-saga/effects';
import { EXAM_ANALYSIS, PRACTICE_ANALYSIS } from './constants';
import { examAnalysisSuccess, examAnalysisError, practiceAnalysisSuccess, practiceAnalysisError } from './actions';

import * as Api from './Api';

export function* examAnalysisSaga() {
  while (true) {
    const {payload} = yield take(EXAM_ANALYSIS);
    const { response, error } = yield call(Api.examAnalysis, payload);
    if (response && !error) {
      yield put(examAnalysisSuccess(response));
    } else {
      yield put(examAnalysisError(error));
    }
  }
}

export function* practiceAnalysisSaga() {
  while (true) {
    const {payload} = yield take(PRACTICE_ANALYSIS);
    const { response, error } = yield call(Api.practiceAnalysis, payload);
    if (response && !error) {
      yield put(practiceAnalysisSuccess(response));
    } else {
      yield put(practiceAnalysisError(error));
    }
  }
}

export default function* rootSaga() {
  yield fork(examAnalysisSaga);
  yield fork(practiceAnalysisSaga);
}
