import { createSelector } from 'reselect';

const selectNotice = (state) => state.get('notice');


const makeSelectLoading = () => createSelector(
  selectNotice,
  (noticeState) => noticeState.get('loading')
);

const makeSelectNotices = () => createSelector(
  selectNotice,
  (noticeState) => noticeState.get('notices')
);

const makeSelectError = () => createSelector(
  selectNotice,
  (noticeState) => noticeState.get('error')
);

const makeSelectHasUnread = () => createSelector(
  selectNotice,
  (noticeState) => noticeState.get('hasUnread')
);

export {
  makeSelectNotices,
  makeSelectLoading,
  makeSelectError,
  makeSelectHasUnread
};
