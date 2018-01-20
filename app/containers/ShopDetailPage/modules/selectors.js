/**
 * Shoppage selectors
 */

import { createSelector } from 'reselect';

const selectShop = (state) => state.get('shop');

// const makeSelectUsername = () => createSelector(
//   selectShop,
//   (homeState) => homeState.get('username')
// );


// const selectRoute = (state) => state.get('route');

// const makeSelectCurrentUser = () => createSelector(
//   selectShop,
//   (shopState) => shopState.get('currentUser')
// );

const makeSelectLoading = () => createSelector(
  selectShop,
  (shopState) => shopState.get('loading')
);

const makeSelectError = () => createSelector(
  selectShop,
  (shopState) => shopState.get('error')
);

const makeSelectShops = () => createSelector(
  selectShop,
  // (shopState) => shopState.getIn(['shop', 'list'])
  (shopState) => shopState.get('shops')
);

const makeSelectShopsCount = () => createSelector(
  selectShop,
  (shopState) => shopState.get('shopsCount')
);

const makeSelectShopTypes = () => createSelector(
  selectShop,
  (shopState) => shopState.get('shopTypes')
);
// const makeSelectLocation = () => createSelector(
//   selectRoute,
//   (routeState) => routeState.get('location').toJS()
// );

export {
  // selectHome,
  // makeSelectUsername,
  selectShop,
  // makeSelectCurrentUser,
  makeSelectLoading,
  makeSelectError,
  makeSelectShops,
  makeSelectShopsCount,
  makeSelectShopTypes,
};
