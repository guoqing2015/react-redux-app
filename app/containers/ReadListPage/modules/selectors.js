import { createSelector } from 'reselect';

const selectExamList = (state) => state.get('readList');

const makeSelectLoading = () => createSelector(
  selectExamList,
  (examListState) => examListState.get('loading')
);

const makeSelectError = () => createSelector(
  selectExamList,
  (examListState) => examListState.get('error')
);

const makeSelectList = () => createSelector(
  selectExamList,
  (examListState) => examListState.get('list')
);

const makeSelectListCount = () => createSelector(
  selectExamList,
  (examListState) => examListState.get('listCount')
);


export {
  selectExamList,
  makeSelectLoading,
  makeSelectError,
  makeSelectList,
  makeSelectListCount,
};
