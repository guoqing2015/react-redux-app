import { fromJS } from 'immutable';

import {
  QUERY_FIRST_CATEGORY,
  QUERY_FIRST_CATEGORY_SUCCESS,
  QUERY_FIRST_CATEGORY_ERROR,
  QUERY_SECOND_CATEGORY,
  QUERY_SECOND_CATEGORY_SUCCESS,
  QUERY_SECOND_CATEGORY_ERROR,
  QUERY_THIRD_CATEGORY,
  QUERY_THIRD_CATEGORY_SUCCESS,
  QUERY_THIRD_CATEGORY_ERROR,
  QUERY_FOURTH_CATEGORY,
  QUERY_FOURTH_CATEGORY_SUCCESS,
  QUERY_FOURTH_CATEGORY_ERROR,
  GET_ALL_CATEGORY
} from './constants';


const initialState = fromJS({
  loading: false,
  error: false,
  firstCategory: false,
  secondCategory: false,
  thirdCategory: false,
  fourthCategory: false,
  allCategory: {}
});

function collectReducer(state = initialState, action) {
  switch (action.type) {
    case QUERY_FIRST_CATEGORY:
      return state
        .set('loading', true)
        .set('error', false)
        .set('firstCategory', false)
    case QUERY_FIRST_CATEGORY_SUCCESS:
      return state
        .set('error', false)
        .set('loading', false)
        .set('firstCategory', action.response)
    case QUERY_FIRST_CATEGORY_ERROR:
      return state
        .set('error', false)
        .set('loading', false)
        .set('firstCategory', false)

    case QUERY_SECOND_CATEGORY:
      return state
        .set('loading', true)
        .set('error', false)
        .set('secondCategory', false)
    case QUERY_SECOND_CATEGORY_SUCCESS:
      return state
        .set('error', false)
        .set('loading', false)
        .set('secondCategory', action.response)
    case QUERY_SECOND_CATEGORY_ERROR:
      return state
        .set('error', false)
        .set('loading', false)
        .set('secondCategory', false)

    case QUERY_THIRD_CATEGORY:
      return state
        .set('loading', true)
        .set('error', false)
        .set('thirdCategory', false)
    case QUERY_THIRD_CATEGORY_SUCCESS:
      return state
        .set('error', false)
        .set('loading', false)
        .set('thirdCategory', action.response.content)
    case QUERY_THIRD_CATEGORY_ERROR:
      return state
        .set('error', false)
        .set('loading', false)
        .set('thirdCategory', false)

    case QUERY_FOURTH_CATEGORY:
      return state
        .set('loading', true)
        .set('error', false)
        .set('fourthCategory', false)
    case QUERY_FOURTH_CATEGORY_SUCCESS:
      return state
        .set('error', false)
        .set('loading', false)
        .set('fourthCategory', action.response.content)
    case QUERY_FOURTH_CATEGORY_ERROR:
      return state
        .set('error', false)
        .set('loading', false)
        .set('fourthCategory', false)

    case GET_ALL_CATEGORY:
      return state
        .set('allCategory', false)

    default:
      return state;
  }
}

export default collectReducer;
