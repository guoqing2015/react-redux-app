

import {
  LOAD_SHOP_DETAIL,
  LOAD_SHOP_DETAIL_SUCCESS,
  LOAD_SHOP_DETAIL_ERROR,
} from './constants';

export function loadShopDetail(payload) {
  return {
    type: LOAD_SHOP_DETAIL,
    payload,
  };
}

export function loadShopDetailSuccess(payload) {
  return {
    type: LOAD_SHOP_DETAIL_SUCCESS,
    payload,
  };
}

export function loadShopDetailError(error) {
  return {
    type: LOAD_SHOP_DETAIL_ERROR,
    error,
  };
}

