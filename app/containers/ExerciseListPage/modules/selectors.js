import { createSelector } from 'reselect';

const selectExerciseList = (state) => state.get('exercistList');

const makeSelectLoading = () => createSelector(
  selectExerciseList,
  (exerciseListState) => exerciseListState.get('loading')
);

const makeSelectError = () => createSelector(
  selectExerciseList,
  (exerciseListState) => exerciseListState.get('error')
);

const makeSelectList = () => createSelector(
  selectExerciseList,
  (exerciseListState) => exerciseListState.get('list')
);

const makeSelectListCount = () => createSelector(
  selectExerciseList,
  (exerciseListState) => exerciseListState.get('listCount')
);


export {
  selectExerciseList,
  makeSelectLoading,
  makeSelectError,
  makeSelectList,
  makeSelectListCount,
};
