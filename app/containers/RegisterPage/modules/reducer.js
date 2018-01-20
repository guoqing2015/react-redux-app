
import { Map } from 'immutable';

import {
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
} from './constants';


const initialState = Map({
  loading: false,
  error: false,
  customerid: null
});

function reducer(state = initialState, action) {
  switch (action.type) {

    case REGISTER:
      return state
        .set('loading', true)
        .set('error', false)
        .set('customerid', null);
    case REGISTER_SUCCESS:
      debugger;
      return state
        .set('customerid', action.customerid)
        .set('error', false)
        .set('loading', false);
    case REGISTER_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default reducer;
