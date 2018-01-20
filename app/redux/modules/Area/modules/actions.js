

import {
  QUERY_PROVINCES,
  QUERY_PROVINCES_SUCCESS,
  SET_PROVINCE,
  QUERY_CITYS,
  QUERY_CITYS_SUCCESS,
  SET_CITY,
  QUERY_COUNTY,
  QUERY_COUNTY_SUCCESS,
  SET_COUNTY,
} from './constants';

export function queryProvinces(payload) {
  return {
    type: QUERY_PROVINCES,
    payload
  };
}

export function queryProvincesSuccess(response) {
  return {
    type: QUERY_PROVINCES_SUCCESS,
    response
  };
}

export function setProvince(payload) {
  return {
    type: SET_PROVINCE,
    payload
  };
}

export function queryCitys(payload) {
  return {
    type: QUERY_CITYS,
    payload
  };
}



export function queryCitysSuccess(response) {
  return {
    type: QUERY_CITYS_SUCCESS,
    response
  };
}

export function setCity(payload) {
  return {
    type: SET_CITY,
    payload
  };
}


export function queryCountys(payload) {
  return {
    type: QUERY_COUNTY,
    payload
  };
}

export function queryCountysSuccess(response) {
  return {
    type: QUERY_COUNTY_SUCCESS,
    response
  };
}


export function setCounty(payload) {
  return {
    type: SET_COUNTY,
    payload
  };
}


