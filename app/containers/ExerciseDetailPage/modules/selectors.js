import { createSelector } from 'reselect';

const selectExerciseDetail = (state) => state.get('exerciseDetail');


const makeSelectLoading = () => createSelector(
  selectExerciseDetail,
  (exerciseDetailstate) => exerciseDetailstate.get('loading')
);


const makeSelectError = () => createSelector(
  selectExerciseDetail,
  (exerciseDetailstate) => exerciseDetailstate.get('error')
);

const makeSelectDetail = () => createSelector(
  selectExerciseDetail,
  (exerciseDetailstate) =>  exerciseDetailstate.get('detail')
);


export {
  selectExerciseDetail,
  makeSelectLoading,
  makeSelectError,
  makeSelectDetail
};
