import { Map } from 'immutable';

import {
  INIT_LIST,
  LOAD_LIST,
  LOAD_LIST_SUCCESS,
  LOAD_LIST_ERROR,
} from './constants';


const initialState = Map({
  loading: false,
  error: false,
  list: false,
  listCount: 0,
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case INIT_LIST:
      return state
        .set('error', false)
        .set('list', false)
        .set('listCount', 0);
    case LOAD_LIST:
      return state
        .set('loading', true)
        .set('error', false);
    case LOAD_LIST_SUCCESS:
      return state
        .set('list', [...action.response.content.aaData, ...state.get('list')])
        .set('listCount', action.response.content.iTotalRecords)
        .set('loading', false);
    case LOAD_LIST_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default reducer;
