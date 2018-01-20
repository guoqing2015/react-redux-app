
import { createSelector } from 'reselect';

const selectCollect = (state) => state.get('collect');

const makeSelectCollectList = () => createSelector(
  selectCollect,
  (collectState) => collectState.get('collectList')
);


const makeSelectLoading = () => createSelector(
  selectCollect,
  (collectState) => collectState.get('loading')
);


const makeSelectError = () => createSelector(
  selectCollect,
  (collectState) => collectState.get('error')
);


export {
  selectCollect,
  makeSelectCollectList,
  makeSelectLoading,
  makeSelectError
};
