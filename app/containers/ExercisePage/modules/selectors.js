import { createSelector } from 'reselect';

const selectExercise = (state) => state.get('exercise');


const makeSelectLoading = () => createSelector(
  selectExercise,
  (examState) => examState.get('loading')
);


const makeSelectError = () => createSelector(
  selectExercise,
  (examState) => examState.get('error')
);

const makeSelectDetail = () => createSelector(
  selectExercise,
  (examState) =>  examState.get('detail')
);

const makeSelectDetailId = () => createSelector(
  selectExercise,
  (examState) =>  examState.get('detailId')
);

const makeSelectExamResult = () => createSelector(
  selectExercise,
  (examState) =>  examState.get('examResult')
);

const makeSelectSubjectList = () => createSelector(
  selectExercise,
  (examState) =>  examState.get('subjectList')
);

export {
  selectExercise,
  makeSelectLoading,
  makeSelectError,
  makeSelectDetail,
  makeSelectDetailId,
  makeSelectExamResult,
  makeSelectSubjectList
};
