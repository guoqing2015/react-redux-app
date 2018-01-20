

import {
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_ERROR,

} from './constants';

export function register(payload) {
  return {
    type: REGISTER,
    payload,
  };
}

export function registerSuccess(customerid) {
  return {
    type: REGISTER_SUCCESS,
    customerid,
  };
}

export function registerError(error) {
  return {
    type: REGISTER_ERROR,
    error,
  };
}

