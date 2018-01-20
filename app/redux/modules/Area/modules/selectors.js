import { createSelector } from 'reselect';

const selectArea = (state) => state.get('area');



const makeSelectLoading = () => createSelector(
  selectArea,
  (areaState) => areaState.get('loading')
);


const makeSelectError = () => createSelector(
  selectArea,
  (areaState) => areaState.get('error')
);

const makeSelectProvinces = () => createSelector(
  selectArea,
  (areaState) =>  areaState.get('provinces')
);

const makeSelectCitys = () => createSelector(
  selectArea,
  (areaState) =>  areaState.get('citys')
);

const makeSelectCountys = () => createSelector(
  selectArea,
  (areaState) =>  areaState.get('countys')
);

const makeSelectLocation = () => createSelector(
  selectArea,
  (areaState) =>  areaState.get('location')
);


export {
  selectArea,
  makeSelectProvinces,
  makeSelectCitys,
  makeSelectCountys,
  makeSelectLoading,
  makeSelectError,
  makeSelectLocation
};
