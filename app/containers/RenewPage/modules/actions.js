

import {
  QUERY_TARIFF,
  QUERY_TARIFF_SUCCESS,
  QUERY_TARIFF_ERROR,
} from './constants';

export function queryTariff() {
  return {
    type: QUERY_TARIFF,
  };
}

export function queryTariffSuccess(response) {
  return {
    type: QUERY_TARIFF_SUCCESS,
    response,
  };
}

export function queryTariffError(error) {
  return {
    type: QUERY_TARIFF_ERROR,
    error,
  };
}


