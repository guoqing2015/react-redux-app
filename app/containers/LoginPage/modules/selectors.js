import { createSelector } from 'reselect';

const selectLogin = (state) => state.get('login');

const makeSelectLoading = () => createSelector(
  selectLogin,
  (registerState) => registerState.get('loading')
);

const makeSelectCustomerid = () => createSelector(
  selectLogin,
  (registerState) => registerState.get('customerid')
);

const makeSelectError = () => createSelector(
  selectLogin,
  (registerState) => registerState.get('error')
);

export {
  makeSelectCustomerid,
  makeSelectLoading,
  makeSelectError,
};
