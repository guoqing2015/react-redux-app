import {
  GET_USER_INFO,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_ERROR,
  UPDATE_USER_INFO,
  UPDATE_USER_INFO_SUCCESS,
  UPDATE_USER_INFO_ERROR,
  SET_OPENID,
  GET_OPENID,
  GET_OPENID_SUCCESS,
  GET_OPENID_ERROR,
  LOGGIN,
  LOGOUT
} from './constants';


export function setOpenid(payload) {
  return {
    type: SET_OPENID,
    payload
  };
}

export function getOpenid(payload) {
  return {
    type: GET_OPENID,
    payload
  };
}

export function getOpenidSuccess(response) {
  return {
    type: GET_OPENID_SUCCESS,
    response
  };
}

export function getOpenidError(error) {
  return {
    type: GET_OPENID_ERROR,
    error,
  };
}

export function getUserInfo(payload) {
  return {
    type: GET_USER_INFO,
    payload
  };
}

export function getUserInfoSuccess(response) {
  return {
    type: GET_USER_INFO_SUCCESS,
    response
  };
}

export function getUserInfoError(error) {
  return {
    type: GET_USER_INFO_ERROR,
    error,
  };
}


export function updateUserInfo(payload) {
  return {
    type: UPDATE_USER_INFO,
    payload
  };
}

export function updateUserInfoSuccess(response) {
  return {
    type: UPDATE_USER_INFO_SUCCESS,
    response
  };
}

export function updateUserInfoError(error) {
  return {
    type: UPDATE_USER_INFO_ERROR,
    error,
  };
}

export function loggin() {
  return {
    type: LOGGIN,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}
