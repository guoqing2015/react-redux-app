
import { createSelector } from 'reselect';

const selectChart = (state) => state.get('chart');

const makeSelectExamAnalysisData = () => createSelector(
  selectChart,
  (state) => state.get('examAnalysisData')
);

const makeSelectPracticeAnalysisData = () => createSelector(
  selectChart,
  (state) => state.get('practiceAnalysisData')
);

const makeSelectLoading = () => createSelector(
  selectChart,
  (state) => state.get('loading')
);


const makeSelectError = () => createSelector(
  selectChart,
  (state) => state.get('error')
);


export {
  selectChart,
  makeSelectExamAnalysisData,
  makeSelectPracticeAnalysisData,
  makeSelectLoading,
  makeSelectError
};
