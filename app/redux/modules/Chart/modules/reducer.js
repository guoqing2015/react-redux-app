import { fromJS } from 'immutable';

import {
  EXAM_ANALYSIS,
  EXAM_ANALYSIS_SUCCESS,
  EXAM_ANALYSIS_ERROR,
  PRACTICE_ANALYSIS,
  PRACTICE_ANALYSIS_SUCCESS,
  PRACTICE_ANALYSIS_ERROR,
} from './constants';


const initialState = fromJS({
  loading: false,
  error: false,
  examAnalysisData: false,
  practiceAnalysisData: false
});

function collectReducer(state = initialState, action) {
  switch (action.type) {
    case EXAM_ANALYSIS:
      return state
        .set('loading', true)
        .set('error', false)
        .set('examAnalysisData', false)
    case EXAM_ANALYSIS_SUCCESS:
      return state
        .set('error', false)
        .set('loading', false)
        .set('examAnalysisData', action.response.content)
    case EXAM_ANALYSIS_ERROR:
      return state
        .set('error', false)
        .set('loading', false)
        .set('examAnalysisData', false)
    case PRACTICE_ANALYSIS:
      return state
        .set('loading', true)
        .set('error', false)
        .set('practiceAnalysisData', false)
    case PRACTICE_ANALYSIS_SUCCESS:
      return state
        .set('error', false)
        .set('loading', false)
        .set('practiceAnalysisData', action.response.content)
    case PRACTICE_ANALYSIS_ERROR:
      return state
        .set('error', false)
        .set('loading', false)
        .set('practiceAnalysisData', false)
    default:
      return state;
  }
}

export default collectReducer;
