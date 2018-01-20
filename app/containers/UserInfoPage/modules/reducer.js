import { Map } from 'immutable';

import {
  GET_NOTICE_LIST,
  GET_NOTICE_LIST_SUCCESS,
  GET_NOTICE_LIST_ERROR,
  UPDATE_NOTICE_STATUS
} from './constants';


const initialState = Map({
  loading: false,
  error: false,
  notices: false,
  hasUnread: false
});

/**
 * 判断是否还有未读的消息
 * @param notices
 * @returns {boolean}
 */
function hasUnread(notices) {
  notices.forEach( (value) => {
    if (value.status_code == 1) {
      return true;
    }
  });
  return false;
}


function reducer(state = initialState, action) {
  switch (action.type) {

    case GET_NOTICE_LIST:
      return state
        .set('loading', true)
        .set('error', false)
        .set('notices', false)
        .set('hasUnread', false)
    case GET_NOTICE_LIST_SUCCESS:
      return state
        .set('notices', action.response.history_info)
        .set('error', false)
        .set('loading', false)
        .set('hasUnread', hasUnread(action.response.history_info));
    case GET_NOTICE_LIST_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    case UPDATE_NOTICE_STATUS:
      let notices = state.get('notices').map((notice) => {
        if (notice.id == action.payload.id) {
          return Object.assign({}, notice, {status_code: 2});
        }
        return notice;
      })
      return state
        .set('notices', notices)
        .set('hasUnread', hasUnread(notices));


    //return state
    //  .set('error', action.error)
    //  .set('loading', false);
    default:
      return state;
  }
}

export default reducer;
