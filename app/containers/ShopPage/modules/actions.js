

import {
  LOAD_SHOP_TYPES,
  LOAD_SHOP_TYPES_SUCCESS,
  INIT_SHOP_LIST,
  LOAD_SHOP_LIST,
  LOAD_SHOP_LIST_SUCCESS,
  LOAD_SHOP_LIST_ERROR,
} from './constants';


export function initShopList() {
  return {
    type: INIT_SHOP_LIST,
  };
}

export function loadShopList(payload) {
  return {
    type: LOAD_SHOP_LIST,
    payload,
  };
}

export function loadShopListSuccess(payload) {
  return {
    type: LOAD_SHOP_LIST_SUCCESS,
    payload,
  };
}

export function loadShopListError(error) {
  return {
    type: LOAD_SHOP_LIST_ERROR,
    error,
  };
}

export function loadShopTypes(payload) {
  return {
    type: LOAD_SHOP_TYPES,
    payload,
  };
}

export function loadShopTypesSuccess(payload) {
  return {
    type: LOAD_SHOP_TYPES_SUCCESS,
    payload,
  };
}
