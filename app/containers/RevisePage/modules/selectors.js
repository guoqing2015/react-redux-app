import { createSelector } from 'reselect';

const selectRevise = (state) => state.get('revise');


const makeSelectLoading = () => createSelector(
  selectRevise,
  (reviseState) => reviseState.get('loading')
);


const makeSelectError = () => createSelector(
  selectRevise,
  (reviseState) => reviseState.get('error')
);

const makeSelectDetail = () => createSelector(
  selectRevise,
  (reviseState) =>  reviseState.get('detail')
);

const makeSelectExamResult = () => createSelector(
  selectRevise,
  (reviseState) =>  reviseState.get('examResult')
);

export {
  selectRevise,
  makeSelectLoading,
  makeSelectError,
  makeSelectDetail,
  makeSelectExamResult
};
