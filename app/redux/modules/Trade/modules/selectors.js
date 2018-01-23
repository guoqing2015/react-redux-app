import { createSelector } from 'reselect';

const Trade = (state) => state.get('trade');


const makeSelectLoading = () => createSelector(
  Trade,
  (tradeState) => tradeState.get('loading')
);


const makeSelectError = () => createSelector(
  Trade,
  (tradeState) => tradeState.get('error')
);

const makeSelectDetail = () => createSelector(
  Trade,
  (tradeState) =>  tradeState.get('detail')
);


export {
  Trade,
  makeSelectLoading,
  makeSelectError,
  makeSelectDetail
};
