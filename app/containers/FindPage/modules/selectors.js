import { createSelector } from 'reselect';

const selectFind = (state) => state.get('find');

const makeSelectLoading = () => createSelector(
  selectFind,
  (findState) => findState.get('loading')
);


const makeSelectError = () => createSelector(
  selectFind,
  (findState) => findState.get('error')
);

const makeSelectAdList = () => createSelector(
  selectFind,
  (findState) =>  findState.get('adList')
);


export {
  selectFind,
  makeSelectLoading,
  makeSelectError,
  makeSelectAdList,
};
