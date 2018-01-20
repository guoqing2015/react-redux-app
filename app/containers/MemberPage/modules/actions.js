

import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from './constants';

export function login(payload) {
  return {
    type: LOGIN,
    payload,
  };
}

export function loginSuccess(customerid) {
  return {
    type: LOGIN_SUCCESS,
    customerid,
  };
}

export function loginError(error) {
  return {
    type: LOGIN_ERROR,
    error,
  };
}

