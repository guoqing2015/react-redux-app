import { createSelector } from 'reselect';

const selectRegister = (state) => state.get('register');

const makeSelectLoading = () => createSelector(
  selectRegister,
  (registerState) => registerState.get('loading')
);

const makeSelectCustomerid = () => createSelector(
  selectRegister,
  (registerState) => registerState.get('customerid')
);

const makeSelectError = () => createSelector(
  selectRegister,
  (registerState) => registerState.get('error')
);

export {
  makeSelectCustomerid,
  makeSelectLoading,
  makeSelectError,
};
