import { createSelector } from 'reselect';

const selectVip = (state) => state.get('vip');



const makeSelectLoading = () => createSelector(
  selectVip,
  (vipState) => vipState.get('loading')
);


const makeSelectError = () => createSelector(
  selectVip,
  (vipState) => vipState.get('error')
);

const makeSelectTariff = () => createSelector(
  selectVip,
  (vipState) =>  vipState.get('tariff')
);


export {
  selectVip,
  makeSelectTariff,
  makeSelectLoading,
  makeSelectError,
};
