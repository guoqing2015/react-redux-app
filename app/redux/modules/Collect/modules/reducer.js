import { fromJS } from 'immutable';

import {
  QUERY_COLLECT,
  QUERY_COLLECT_SUCCESS,
  QUERY_COLLECT_ERROR,
  ADD_COLLECT,
  DELETE_COLLECT
} from './constants';


const initialState = fromJS({
  loading: false,
  error: false,
  collectList: false
});

function collectReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_COLLECT:
      return state
        .set('collectList', [...state.get('collectList'), action.payload.subject])

    case DELETE_COLLECT:
      let collectList = [...state.get('collectList')];
      let targetSubjectid = action.payload.subject.subjectid;
      var index;
      collectList.forEach((v, i) => {
        if(v.subjectid == targetSubjectid) {
          index = i
        }
      });
      collectList.splice(index , 1);
      return state
        .set('collectList', collectList);

    case QUERY_COLLECT:
      return state
        .set('loading', true)
        .set('error', false)
        .set('collectList', false)

    case QUERY_COLLECT_SUCCESS:
      return state
        .set('error', false)
        .set('loading', false)
        .set('collectList', action.response.content.aaData)

    case QUERY_COLLECT_ERROR:
      return state
        .set('error', false)
        .set('loading', false)

    default:
      return state;
  }
}

export default collectReducer;
