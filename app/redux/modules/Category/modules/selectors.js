
import { createSelector } from 'reselect';

const selectCategory = (state) => state.get('category');

const makeSelectFirstCategory = () => createSelector(
  selectCategory,
  (state) => state.get('firstCategory')
);

const makeSelectSecondCategory = () => createSelector(
  selectCategory,
  (state) => state.get('secondCategory')
);

const makeSelectThirdCategory = () => createSelector(
  selectCategory,
  (state) => state.get('thirdCategory')
);

const makeSelectFourthCategory = () => createSelector(
  selectCategory,
  (state) => state.get('fourthCategory')
);


const makeSelectLoading = () => createSelector(
  selectCategory,
  (state) => state.get('loading')
);


const makeSelectError = () => createSelector(
  selectCategory,
  (state) => state.get('error')
);


export {
  selectCategory,
  makeSelectFirstCategory,
  makeSelectSecondCategory,
  makeSelectThirdCategory,
  makeSelectFourthCategory,
  makeSelectLoading,
  makeSelectError
};
