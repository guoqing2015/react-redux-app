import { createSelector } from 'reselect';

const selectErrancy = (state) => state.get('errancy');

const makeSelectLoading = () => createSelector(
  selectErrancy,
  (examListState) => examListState.get('loading')
);

const makeSelectError = () => createSelector(
  selectErrancy,
  (examListState) => examListState.get('error')
);

const makeSelectList = () => createSelector(
  selectErrancy,
  (examListState) => examListState.get('list')
);

const makeSelectListCount = () => createSelector(
  selectErrancy,
  (examListState) => examListState.get('listCount')
);


export {
  selectErrancy,
  makeSelectLoading,
  makeSelectError,
  makeSelectList,
  makeSelectListCount,
};
