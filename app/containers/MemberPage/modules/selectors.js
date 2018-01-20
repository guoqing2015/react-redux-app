import { createSelector } from 'reselect';

const selectMember = (state) => state.get('member');

const makeSelectLoading = () => createSelector(
  selectMember,
  (registerState) => registerState.get('loading')
);

const makeSelectCustomerid = () => createSelector(
  selectMember,
  (registerState) => registerState.get('customerid')
);

const makeSelectError = () => createSelector(
  selectMember,
  (registerState) => registerState.get('error')
);

export {
  makeSelectCustomerid,
  makeSelectLoading,
  makeSelectError,
};
