
import { createSelector } from 'reselect';

const selectCms = (state) => state.get('cms');

const makeSelectCms = () => createSelector(
  selectCms,
  (cmsState) => cmsState.get('cms')
);


const makeSelectLoading = () => createSelector(
  selectCms,
  (cmsState) => cmsState.get('loading')
);


const makeSelectError = () => createSelector(
  selectCms,
  (cmsState) => cmsState.get('error')
);


export {
  selectCms,
  makeSelectCms,
  makeSelectLoading,
  makeSelectError
};
