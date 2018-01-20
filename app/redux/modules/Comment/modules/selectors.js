
import { createSelector } from 'reselect';

const selectComment = (state) => state.get('comment');

const makeSelectCommentList = () => createSelector(
  selectComment,
  (commentState) => commentState.get('commentList')
);

const makeSelectIsCommentSuccess = () => createSelector(
  selectComment,
  (commentState) => commentState.get('isCommentSuccess')
);



const makeSelectLoading = () => createSelector(
  selectComment,
  (commentState) => commentState.get('loading')
);


const makeSelectError = () => createSelector(
  selectComment,
  (commentState) => commentState.get('error')
);


export {
  selectComment,
  makeSelectCommentList,
  makeSelectIsCommentSuccess,
  makeSelectLoading,
  makeSelectError
};
