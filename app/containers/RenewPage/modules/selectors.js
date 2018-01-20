import { createSelector } from 'reselect';

const selectRenew = (state) => state.get('renew');



const makeSelectLoading = () => createSelector(
  selectRenew,
  (renewState) => renewState.get('loading')
);


const makeSelectError = () => createSelector(
  selectRenew,
  (renewState) => renewState.get('error')
);

const makeSelectTariff = () => createSelector(
  selectRenew,
  (renewState) =>  renewState.get('tariff')
);


export {
  selectRenew,
  makeSelectTariff,
  makeSelectLoading,
  makeSelectError,
};
