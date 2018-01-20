import { createSelector } from 'reselect';

const select = (state) => state.get('address');



const makeSelectLoading = () => createSelector(
  select,
  (state) => state.get('loading')
);


const makeSelectError = () => createSelector(
  select,
  (state) => state.get('error')
);

const makeSelectUserAddress = () => createSelector(
  select,
  (state) =>  state.get('userAddress')
);

const makeSelectIsLoaded = () => createSelector(
  select,
  (state) =>  state.get('isLoaded')
);

const makeSelectIsUpdateSuccess = () => createSelector(
  select,
  (state) =>  state.get('isUpdateSuccess')
);

export {
  makeSelectUserAddress,
  makeSelectLoading,
  makeSelectError,
  makeSelectIsUpdateSuccess,
  makeSelectIsLoaded
};
