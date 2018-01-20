
import { Map } from 'immutable';

import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from './constants';


const initialState = Map({
  loading: false,
  error: false,
  customerid: false
});

function reducer(state = initialState, action) {
  switch (action.type) {

    case LOGIN:
      return state
        .set('loading', true)
        .set('error', false)
        .set('customerid', false);
    case LOGIN_SUCCESS:
      return state
        .set('customerid', action.response.content)
        .set('error', false)
        .set('loading', false);
    case LOGIN_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default reducer;
