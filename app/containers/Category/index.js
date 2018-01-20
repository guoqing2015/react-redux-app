
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {FlexBox, FlexBoxAlignCenter, Flex} from 'components/FlexLayout';
import {InputCheckBox, InputRadio} from 'components/Input';

import {queryFirstCategory, querySecondCategory, queryThirdCategory, queryFourthCategory} from '../../redux/modules/Category/modules/actions';
import {makeSelectFirstCategory, makeSelectSecondCategory, makeSelectThirdCategory, makeSelectFourthCategory } from '../../redux/modules/Category/modules/selectors';
import './index.scss';


export class CategoryFour extends React.PureComponent {
  componentDidMount() {
    this.props.queryFirstCategory({
      "parentid": "",
      "parentdictcode": "project"
    });
    this.props.querySecondCategory({
      "parentid": "",
      "parentdictcode": "category"
    });
    this.props.queryThirdCategory({
      "projectcode": "",
      "categorycode": "",
      "parentid": ""
    });


  }


  render() {
    const {firstCategory, secondCategory, thirdCategory, fourthCategory} = this.props;
    return (<div className="category">
      {/*项目*/}
      {
        firstCategory && firstCategory.length > 0 &&
        <div className="border-bottom category__item">
          <FlexBoxAlignCenter>
            <div className="category__title">项目：</div>
            {
              firstCategory.map((item) => (
                <div key={item.dictid} className="category__content">
                  <FlexBoxAlignCenter>
                    <InputCheckBox id={`first-${item.dictid}`} name="first" />
                    <label htmlFor={`first-${item.dictid}`}>{item.dictname}</label>
                  </FlexBoxAlignCenter>
                </div>
              ))
            }
          </FlexBoxAlignCenter>
        </div>
      }



      {/*分类*/}
      {
        secondCategory && secondCategory.length > 0 &&
        <div className="border-bottom category__item">
          <FlexBoxAlignCenter className="check-wrap">
            <div className="category__title">分类：</div>
            {
              secondCategory.map((item) => (
                <div key={item.dictid} className="category__content">
                  <FlexBoxAlignCenter>
                    <InputCheckBox id={`second-${item.dictid}`} name="second" />
                    <label htmlFor={`second-${item.dictid}`}>{item.dictname}</label>
                  </FlexBoxAlignCenter>
                </div>
              ))
            }
          </FlexBoxAlignCenter>
        </div>
      }

      {
        thirdCategory && thirdCategory.length > 0 &&
        <div className="border-bottom category__item">
          <div className="check-wrap d-flex">
            <div className="category__title">选项一：</div>
            <div className="cow category__content_box">
                {
                  thirdCategory.map((item) => (
                    <div key={item.id} className="category__content">
                      <FlexBoxAlignCenter>
                        <InputCheckBox id={`third-${item.id}`} name="third" />
                        <label htmlFor={`third-${item.id}`}>{item.itemname}</label>
                      </FlexBoxAlignCenter>
                    </div>
                  ))
                }
            </div>
          </div>
        </div>
      }

      {
        fourthCategory && fourthCategory.length > 0 &&
        <div className="border-bottom category__item">
          <FlexBoxAlignCenter className="check-wrap">
            <div className="category__title">选项二：</div>
            {
              fourthCategory.map((item) => (
                <div key={item.id} className="category__content">
                  <FlexBoxAlignCenter>
                    <InputCheckBox id={`fourth-${item.id}`} name="fourth" />
                    <label htmlFor={`fourth-${item.id}`}>{item.itemname}</label>
                  </FlexBoxAlignCenter>
                </div>
              ))
            }
          </FlexBoxAlignCenter>
        </div>
      }
    </div>)
  }
}

CategoryFour.propTypes = {
  firstCategory: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.array,
  ]),
  secondCategory: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.array,
  ]),
  thirdCategory: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.array,
  ]),
  fourthCategory: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.array,
  ]),
};

const mapStateToProps = createStructuredSelector({
  firstCategory: makeSelectFirstCategory(),
  secondCategory:makeSelectSecondCategory(),
  thirdCategory: makeSelectThirdCategory(),
  fourthCategory: makeSelectFourthCategory(),
});


export function mapDispatchToProps(dispatch) {
  return {
    queryFirstCategory: (param) => {
      dispatch(queryFirstCategory(param));
    },
    querySecondCategory: (param) => {
      dispatch(querySecondCategory(param));
    },
    queryThirdCategory: (param) => {
      dispatch(queryThirdCategory(param));
    },
    queryFourthCategory: (param) => {
      dispatch(queryFourthCategory(param));
    },
  };
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(CategoryFour);
