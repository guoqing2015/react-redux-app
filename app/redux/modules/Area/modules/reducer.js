import { fromJS } from 'immutable';

import {
  QUERY_PROVINCES,
  QUERY_PROVINCES_SUCCESS,
  SET_PROVINCE,
  QUERY_CITYS,
  QUERY_CITYS_SUCCESS,
  SET_CITY,
  QUERY_COUNTY,
  QUERY_COUNTY_SUCCESS,
  SET_COUNTY,
} from './constants';


const initialState = fromJS({
  loading: false,
  error: false,
  provinces: false,
  citys: false,
  countys: false,
  location: {
    provincename: false,
    provinceid: false,
    city: false,
    cityname: false,
    countyid: false,
    countyname: false,
  }
});



function reducer(state = initialState, action) {
  switch (action.type) {
    case QUERY_PROVINCES:
      return state
        .set('loading', true)
        .set('error', false)
        .set('provinces', false)
    case QUERY_PROVINCES_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('provinces', action.response)
    case SET_PROVINCE:
      return state
        .setIn(['location', 'provincename'], action.payload.name)
        .setIn(['location', 'provinceid'], action.payload.id)
        .setIn(['location', 'cityname'], false)
        .setIn(['location', 'cityid'], false)
        .setIn(['location', 'countyname'], false)
        .setIn(['location', 'countyid'], false)

    case QUERY_CITYS:
        return state
          .set('loading', true)
          .set('error', false)
          .set('citys', false)
    case QUERY_CITYS_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('citys', action.response)
    case SET_CITY:
      return state
        .setIn(['location', 'cityname'], action.payload.name)
        .setIn(['location', 'cityid'], action.payload.id)
        .setIn(['location', 'countyname'], false)
        .setIn(['location', 'countyid'], false)

    case QUERY_COUNTY:
      return state
        .set('loading', true)
        .set('error', false)
        .set('countys',false)
    case QUERY_COUNTY_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('countys', action.response)
    case SET_COUNTY:
      return state
        .setIn(['location', 'countyname'], action.payload.name)
        .setIn(['location', 'countyid'], action.payload.id)
    default:
      return state;
  }
}

export default reducer;
