import { Map } from 'immutable';

import {
  GET_NOTICE_LIST,
  GET_NOTICE_LIST_SUCCESS,
  GET_NOTICE_LIST_ERROR,
  UPDATE_NOTICE_STATUS,
  DELETE_NOTICE_STATUS
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
    if (value.status == 0) {
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
        .set('notices', action.response.content.aaData)
        .set('error', false)
        .set('loading', false)
        .set('hasUnread', hasUnread(action.response.content.aaData));
    case GET_NOTICE_LIST_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    case UPDATE_NOTICE_STATUS:
      let notices = [...state.get('notices')];
      notices = notices.map((notice) => {
        if (notice.id == action.payload.id) {
          return Object.assign({}, notice, {status: 1});
        }
        return notice;
      })
      return state
        .set('notices', notices)
        .set('hasUnread', hasUnread(notices));
    case DELETE_NOTICE_STATUS:
      let notices2 = [...state.get('notices')];
      notices2.splice(notices2.indexOf(action.payload), 1);
      return state
        .set('notices', notices2)
        .set('hasUnread', hasUnread(notices2));
      return state;

    default:
      return state;
  }
}

export default reducer;
