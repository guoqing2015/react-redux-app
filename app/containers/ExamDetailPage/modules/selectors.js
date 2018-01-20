import { createSelector } from 'reselect';

const selectExamDetail = (state) => state.get('examDetail');


const makeSelectLoading = () => createSelector(
  selectExamDetail,
  (examDetailstate) => examDetailstate.get('loading')
);


const makeSelectError = () => createSelector(
  selectExamDetail,
  (examDetailstate) => examDetailstate.get('error')
);

const makeSelectDetail = () => createSelector(
  selectExamDetail,
  (examDetailstate) =>  examDetailstate.get('detail')
);


export {
  selectExamDetail,
  makeSelectLoading,
  makeSelectError,
  makeSelectDetail
};
