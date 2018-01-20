import { createSelector } from 'reselect';

const selectExam = (state) => state.get('exam');


const makeSelectLoading = () => createSelector(
  selectExam,
  (examState) => examState.get('loading')
);


const makeSelectError = () => createSelector(
  selectExam,
  (examState) => examState.get('error')
);

const makeSelectDetail = () => createSelector(
  selectExam,
  (examState) =>  examState.get('detail')
);

const makeSelectExamResult = () => createSelector(
  selectExam,
  (examState) =>  examState.get('examResult')
);

export {
  selectExam,
  makeSelectLoading,
  makeSelectError,
  makeSelectDetail,
  makeSelectExamResult
};
