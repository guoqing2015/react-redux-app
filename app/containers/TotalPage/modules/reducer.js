import { Map } from 'immutable';

import {
  QUERY_ADDRESS,
  QUERY_ADDRESS_SUCCESS,
  QUERY_ADDRESS_ERROR,
  UPDATE_ADDRESS,
  UPDATE_ADDRESS_SUCCESS,
  UPDATE_ADDRESS_ERROR
} from './constants';


const initialState = Map({
  loading: false,
  error: false,
  userAddress: {
    detail_address: "",
    recipient_name: "",
    mobile: "",
    postcode: ""
  },
  isUpdateSuccess: false
});




function reducer(state = initialState, action) {
  switch (action.type) {

    case QUERY_ADDRESS:
      return state
        .set('loading', true)
        .set('error', false)
        // .set('userAddress', {})
    case QUERY_ADDRESS_SUCCESS:
		  const addressList = action.response.address_info;
		  let userAddress = addressList[0] ? addressList[0] : state.get('userAddress');
        return state
          .set('userAddress', userAddress)
          .set('error', false)
          .set('loading', false)
    case QUERY_ADDRESS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);


    case UPDATE_ADDRESS:
      return state
        .set('loading', true)
        .set('error', false)
        .set('isUpdateSuccess', false)
    case UPDATE_ADDRESS_SUCCESS:
      return state
        .set('error', false)
        .set('loading', false)
        .set('isUpdateSuccess', true)
    case UPDATE_ADDRESS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false)
        .set('isUpdateSuccess', false)

    default:
      return state;
  }
}

export default reducer;
