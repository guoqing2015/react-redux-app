
import { Map } from 'immutable';

import {
  LOAD_SHOP_TYPES_SUCCESS,
  INIT_SHOP_LIST,
  LOAD_SHOP_LIST,
  LOAD_SHOP_LIST_SUCCESS,
  LOAD_SHOP_LIST_ERROR,
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

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_SHOP_TYPES_SUCCESS:
      return state
        .set('shopTypes', [...state.get('shopTypes'), ...action.payload.codes]);
    case INIT_SHOP_LIST:
      return state
        .set('error', false)
        .set('shops', false)
        .set('shopsCount', 0);
    case LOAD_SHOP_LIST:
      return state
        .set('loading', true)
        .set('error', false);
        // .setIn(['shop', 'list'], false);
    case LOAD_SHOP_LIST_SUCCESS:
      return state
        // .setIn(['shop', 'list'], action.payload.list)
        // .setIn(['shop', 'count'], action.payload.total_count)
        .set('shops', [...action.payload.list, ...state.get('shops')])
        .set('shopsCount', action.payload.total_count)
        .set('loading', false);
        // .set('currentUser', action.username);
    case LOAD_SHOP_LIST_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default homeReducer;
