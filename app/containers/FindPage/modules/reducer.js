import {Map} from 'immutable';

import {
  GET_ADDLIST,
  GET_ADDLIST_SUCCESS,
  GET_ADDLIST_ERROR,
} from './constants';


const initialState = Map({
  loading: false,
  error: false,
  adList: false
});


function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_ADDLIST_SUCCESS:
      return state
        .set('adList', action.response.content)
    default:
      return state;
  }
}

export default reducer;
