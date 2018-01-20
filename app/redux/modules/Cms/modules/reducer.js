import { fromJS } from 'immutable';

import {
  QUERY_CMS,
  QUERY_CMS_SUCCESS,
  QUERY_CMS_ERROR
} from './constants';


const initialState = fromJS({
  loading: false,
  error: false,
  cms: false
});

function collectReducer(state = initialState, action) {
  switch (action.type) {


    case QUERY_CMS:
      return state
        .set('loading', true)
        .set('error', false)
        .set('cms', false)

    case QUERY_CMS_SUCCESS:
      return state
        .set('error', false)
        .set('loading', false)
        .set('cms', action.response.content)

    case QUERY_CMS_ERROR:
      return state
        .set('error', false)
        .set('loading', false)
        .set('cms', false)

    default:
      return state;
  }
}

export default collectReducer;
