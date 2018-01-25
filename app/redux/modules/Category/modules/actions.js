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

  GET_ALL_CATEGORY,

} from './constants';

export function queryFirstCategory(payload) {
  return {
    type: QUERY_FIRST_CATEGORY,
    payload
  };
}

export function queryFirstCategorySuccess(response) {
  return {
    type: QUERY_FIRST_CATEGORY_SUCCESS,
    response
  };
}

export function queryFirstCategoryError(error) {
  return {
    type: QUERY_FIRST_CATEGORY_ERROR,
    error
  };
}

export function querySecondCategory(payload) {
  return {
    type: QUERY_SECOND_CATEGORY,
    payload
  };
}

export function querySecondCategorySuccess(response) {
  return {
    type: QUERY_SECOND_CATEGORY_SUCCESS,
    response
  };
}

export function querySecondCategoryError(error) {
  return {
    type: QUERY_SECOND_CATEGORY_SUCCESS,
    error
  };
}



export function queryThirdCategory(payload) {
  return {
    type: QUERY_THIRD_CATEGORY,
    payload
  };
}

export function queryThirdCategorySuccess(response) {
  return {
    type: QUERY_THIRD_CATEGORY_SUCCESS,
    response
  };
}

export function queryThirdCategoryError(error) {
  return {
    type: QUERY_THIRD_CATEGORY_ERROR,
    error
  };
}


export function queryFourthCategory(payload) {
  return {
    type: QUERY_FOURTH_CATEGORY,
    payload
  };
}

export function queryFourthCategorySuccess(response) {
  return {
    type: QUERY_FOURTH_CATEGORY_SUCCESS,
    response
  };
}

export function queryFourthCategoryError(error) {
  return {
    type: QUERY_FOURTH_CATEGORY_ERROR,
    error
  };
}

export function getAllCategory() {
  return {
    type: GET_ALL_CATEGORY,
    error
  };
}



