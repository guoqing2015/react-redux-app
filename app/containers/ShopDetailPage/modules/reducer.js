
import { Map } from 'immutable';

import {
  LOAD_SHOP_DETAIL,
  LOAD_SHOP_DETAIL_SUCCESS,
  LOAD_SHOP_DETAIL_ERROR,
} from './constants';


const initialState = Map({
  loading: false,
  error: false,
  shops: false,
  shopsCount: 0,
  shopTypes: [{
    key: null,
    value: '不限',
  }],
});

function reducer(state = initialState, action) {
  switch (action.type) {

    case LOAD_SHOP_DETAIL:
      return state
        .set('error', false)
        .set('shops', false)
        .set('shopsCount', 0);
    case LOAD_SHOP_DETAIL_SUCCESS:
      return state
        .set('shops', [...action.payload.list, ...state.get('shops')])
        .set('shopsCount', action.payload.total_count)
        .set('loading', false);
    case LOAD_SHOP_DETAIL_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default reducer;
