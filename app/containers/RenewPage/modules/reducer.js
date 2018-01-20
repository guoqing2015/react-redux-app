import { Map } from 'immutable';

import {
  QUERY_TARIFF,
  QUERY_TARIFF_SUCCESS,
  QUERY_TARIFF_ERROR,
} from './constants';


const initialState = Map({
  loading: false,
  error: false,
  tariff: false
});




function reducer(state = initialState, action) {
  switch (action.type) {
    case QUERY_TARIFF:
      return state
        .set('loading', true)
        .set('error', false)
        .set('tariff', false)
    case QUERY_TARIFF_SUCCESS:
        return state
          .set('error', false)
          .set('loading', false)
          .set('tariff', action.response.content)
    case QUERY_TARIFF_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false)
        .set('tariff', false)
    default:
      return state;
  }
}

export default reducer;
