
import { createSelector } from 'reselect';

const selectAuth = (state) => state.get('auth');

const makeSelectOpenid = () => createSelector(
  selectAuth,
  (globalState) => globalState.get('openid')
);

const makeSelectUser = () => createSelector(
  selectAuth,
  (globalState) => globalState.get('user')
);

const makeSelectLoading = () => createSelector(
  selectAuth,
  (globalState) => globalState.get('loading')
);

const makeSelectError = () => createSelector(
  selectAuth,
  (globalState) => globalState.get('error')
);


const makeSelectIsLoggedIn  = () => createSelector(
  selectAuth,
  (globalState) => globalState.get('isLoggedIn')
);


export {
  selectAuth,
  makeSelectOpenid,
  makeSelectUser,
  makeSelectLoading,
  makeSelectError,
  makeSelectIsLoggedIn
};
