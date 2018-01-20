import {
  EXAM_ANALYSIS,
  EXAM_ANALYSIS_SUCCESS,
  EXAM_ANALYSIS_ERROR,
  PRACTICE_ANALYSIS,
  PRACTICE_ANALYSIS_SUCCESS,
  PRACTICE_ANALYSIS_ERROR,
} from './constants';

export function examAnalysis(payload) {
  return {
    type: EXAM_ANALYSIS,
    payload
  };
}

export function examAnalysisSuccess(response) {
  return {
    type: EXAM_ANALYSIS_SUCCESS,
    response
  };
}

export function examAnalysisError(error) {
  return {
    type: EXAM_ANALYSIS_ERROR,
    error
  };
}

export function practiceAnalysis(payload) {
  return {
    type: PRACTICE_ANALYSIS,
    payload
  };
}

export function practiceAnalysisSuccess(response) {
  return {
    type: PRACTICE_ANALYSIS_SUCCESS,
    response
  };
}

export function practiceAnalysisError(error) {
  return {
    type: PRACTICE_ANALYSIS_ERROR,
    error
  };
}

