

import {
  QUERY_ADDRESS,
  QUERY_ADDRESS_SUCCESS,
  QUERY_ADDRESS_ERROR,
  UPDATE_ADDRESS,
  UPDATE_ADDRESS_SUCCESS,
  UPDATE_ADDRESS_ERROR
} from './constants';

export function queryAddress() {
  return {
    type: QUERY_ADDRESS,
  };
}

export function queryAddressSuccess(response) {
  return {
    type: QUERY_ADDRESS_SUCCESS,
    response,
  };
}

export function queryAddressError(error) {
  return {
    type: QUERY_ADDRESS_ERROR,
    error,
  };
}


export function updateAddress(payload) {
  return {
    type: UPDATE_ADDRESS,
    payload,
  };
}


export function updateAddressSuccess(response) {
  return {
    type: UPDATE_ADDRESS_SUCCESS,
    response,
  };
}

export function updateAddressError(error) {
  return {
    type: UPDATE_ADDRESS_ERROR,
    error,
  };
}
