import { fromJS } from 'immutable';

import {
  GET_USER_INFO,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_ERROR,
  SET_OPENID,
  GET_OPENID,
  GET_OPENID_SUCCESS,
  GET_OPENID_ERROR,
  LOGGIN,
  LOGOUT
} from './constants';





function checkIsLoggin(user) {
  if(user && user.mobile) return true;
  return false;

}


const initialState = fromJS({
  loading: false,
  error: false,
  openid: false,
  user: false,
  isLoggedIn: false
});

function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_OPENID:
      return state
        .set('openid', action.payload.openid)
    case GET_OPENID:
      return state
        .set('error', false)
        .set('loading', true)
    case GET_OPENID_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('openid', action.response.openid)
    case GET_OPENID_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error)
    case GET_USER_INFO:
      return state
        .set('user', false)
        .set('loading', true)
        .set('error', false);
    case GET_USER_INFO_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('user', action.response.content)
        .set('isLoggedIn', checkIsLoggin(action.response.content))
    case GET_USER_INFO_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error)
    case LOGGIN:
      return state
        .set('isLoggedIn', true)
    case LOGOUT:
      return state
        // .set('user', false)
        .set('isLoggedIn', false)
    default:
      return state;
  }
}

export default authReducer;
