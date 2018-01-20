import { createSelector } from 'reselect';

const selectCollectDetail = (state) => state.get('collectDetail');


const makeSelectLoading = () => createSelector(
  selectCollectDetail,
  (exerciseDetailstate) => exerciseDetailstate.get('loading')
);


const makeSelectError = () => createSelector(
  selectCollectDetail,
  (exerciseDetailstate) => exerciseDetailstate.get('error')
);

const makeSelectDetail = () => createSelector(
  selectCollectDetail,
  (exerciseDetailstate) =>  exerciseDetailstate.get('detail')
);


export {
  selectCollectDetail,
  makeSelectLoading,
  makeSelectError,
  makeSelectDetail
};
