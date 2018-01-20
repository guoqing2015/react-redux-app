import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable'; //TODO 待修改
import { LOCATION_CHANGE } from 'react-router-redux';

// import globalReducer from 'containers/App/modules/reducer';
// import languageProviderReducer from 'containers/LanguageProvider/reducer';
import { reducer as formReducer } from 'redux-form'
import authReducer from 'redux/modules/Auth/modules/reducer';
import collectReducer from 'redux/modules/Collect/modules/reducer';
import cmsReducer from 'redux/modules/Cms/modules/reducer';
import areaReducer from 'redux/modules/Area/modules/reducer';
import categoryReducer from 'redux/modules/Category/modules/reducer';
import chartReducer from 'redux/modules/Chart/modules/reducer';
import commentReducer from 'redux/modules/Comment/modules/reducer';

/*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@5
 *
 */

// Initial routing state
const routeInitialState = fromJS({
  location: null,
});

/**
 * Merge route into the global application state
 */
function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return state.merge({
        location: action.payload,
      });
    default:
      return state;
  }
}

/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function createReducer(injectedReducers) {
  return combineReducers({
    route: routeReducer,
    form: formReducer,
    // global: globalReducer,
    auth: authReducer,
    collect: collectReducer,
    cms: cmsReducer,
    area: areaReducer,
    category: categoryReducer,
    chart: chartReducer,
    comment: commentReducer,
    // language: languageProviderReducer,
    ...injectedReducers,
  });
}
