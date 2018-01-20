import { fromJS } from 'immutable';

import {
  QUERY_COMMENT,
  QUERY_COMMENT_SUCCESS,
  QUERY_COMMENT_ERROR,
  ADD_COMMENT,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_ERROR
} from './constants';


const initialState = fromJS({
  loading: false,
  error: false,
  commentList: false,
  isCommentSuccess: false
});

function collectReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_COMMENT:
      return state
        .set('isCommentSuccess', false);
    case ADD_COMMENT_SUCCESS:
      return state
        .set('isCommentSuccess', true);
    case ADD_COMMENT_ERROR:
      return state
        .set('isCommentSuccess', false);


    case QUERY_COMMENT:
      return state
        .set('loading', true)
        .set('error', false)
        .set('commentList', false);

    case QUERY_COMMENT_SUCCESS:
      return state
        .set('error', false)
        .set('loading', false)
        .set('commentList', action.response.content.aaData)

    case QUERY_COMMENT_ERROR:
      return state
        .set('error', false)
        .set('loading', false)

    default:
      return state;
  }
}

export default collectReducer;
