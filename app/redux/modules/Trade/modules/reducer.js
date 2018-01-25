import {Map} from 'immutable';

import {
  QUERY_DETAIL,
  QUERY_DETAIL_SUCCESS,
  QUERY_DETAIL_ERROR,
} from './constants';


const initialState = Map({
  loading: false,
  error: false,
  detail: false
});


function reducer(state = initialState, action) {
  switch (action.type) {
    case QUERY_DETAIL:
      return state
        .set('detail', false)
        .set('loading', true)
        .set('error', false)
    case QUERY_DETAIL_SUCCESS:
      return state
        .set('detail', JSON.parse(action.response.content))
        .set('error', false)
        .set('loading', false)
    case QUERY_DETAIL_ERROR:
      return state
        .set('detail', false)
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default reducer;
