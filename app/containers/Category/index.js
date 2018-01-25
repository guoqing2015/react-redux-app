
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {FlexBox, FlexBoxAlignCenter, Flex} from 'components/FlexLayout';
import {InputCheckBox, InputRadio} from 'components/Input';

import {queryFirstCategory, querySecondCategory, queryThirdCategory, queryFourthCategory, getAllCategory} from '../../redux/modules/Category/modules/actions';
import {makeSelectFirstCategory, makeSelectSecondCategory, makeSelectThirdCategory, makeSelectFourthCategory } from '../../redux/modules/Category/modules/selectors';
import './index.scss';


export class CategoryFour extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstCategory: [],
      secondCategory: [],
      thirdCategory: [],
      fourthCategory: [],
    };

    this.toggleSelect = this.toggleSelect.bind(this);
    this.queryFirstCategory = this.queryFirstCategory.bind(this);
    this.querySecondCategory = this.querySecondCategory.bind(this);
    this.queryThirdCategory = this.queryThirdCategory.bind(this);
    this.queryFourthCategory = this.queryFourthCategory.bind(this);
    this.getProjectcode = this.getProjectcode.bind(this);
    this.getCategorycode = this.getCategorycode.bind(this);
    this.getItemcode = this.getItemcode.bind(this);
    this.getSubitemcode = this.getSubitemcode.bind(this);
  }


  componentDidMount() {
    this.queryFirstCategory();
    this.querySecondCategory();
    this.queryThirdCategory();
    this.queryFourthCategory();
  }

  componentWillReceiveProps(nextProps) {
    if(!this.props.firstCategory && nextProps.firstCategory) {
      this.setState({
        firstCategory: nextProps.firstCategory
      })
    }
    if(!this.props.secondCategory && nextProps.secondCategory) {
      this.setState({
        secondCategory: nextProps.secondCategory
      })
    }
    if(!this.props.thirdCategory && nextProps.thirdCategory) {
      this.setState({
        thirdCategory: nextProps.thirdCategory
      })
    }
    if(!this.props.fourthCategory && nextProps.fourthCategory) {
      this.setState({
        fourthCategory: nextProps.fourthCategory
      })
    }
  }

  queryFirstCategory() {
    this.props.queryFirstCategory({
      "parentid": "",
      "parentdictcode": "project"
    });
  }

  querySecondCategory() {
    this.props.querySecondCategory({
      "parentid": "",
      "parentdictcode": "category"
    });
  }

  queryThirdCategory() {
    this.props.queryThirdCategory({
      "projectcode": this.getProjectcode(),
      "categorycode": this.getCategorycode(),
      "parentitemcode": ""
    });
  }

  queryFourthCategory() {
    this.props.queryFourthCategory({
      "projectcode": this.getProjectcode(),
      "categorycode": this.getCategorycode(),
      "parentitemcode":  this.getItemcode()
    });
  }

  getProjectcode() {
    const firstCategory = this.state.firstCategory;
    let projectcode = [];
    firstCategory.forEach((v) => {
      if(v.checked) {
        projectcode.push(v.dictcode)
      }
    })
    return projectcode.join(',');
  }

  getCategorycode() {
    const secondCategory = this.state.secondCategory;
    let categorycode = [];
    secondCategory.forEach((v) => {
      if(v.checked) {
        categorycode.push(v.dictcode)
      }
    })
    return categorycode.join(',');
  }

  getItemcode() {
    const thirdCategory = this.state.thirdCategory;
    let itemcode = [];
    thirdCategory.forEach((v) => {
      if(v.checked) {
        itemcode.push(v.itemcode)
      }
    })
    return itemcode.join(',');
  }

  getSubitemcode() {
    const fourthCategory = this.state.fourthCategory;
    let subitemcode = [];
    fourthCategory.forEach((v) => {
      if(v.checked) {
        subitemcode.push(v.itemcode)
      }
    })
    return subitemcode.join(',');
  }

  toggleSelect(i, arrType) {
    var arr = [...this.state[arrType]];
    if(arr[i].checked){
      arr[i].checked = false;
      this.setState({
        [arrType]: arr
      });
    } else {
      arr[i].checked = true;
      this.setState({
        [arrType]: arr
      });
    }

    if(arrType == 'firstCategory') {
      this.queryThirdCategory();
      this.queryFourthCategory();
    }else if(arrType == 'secondCategory') {
      this.queryThirdCategory();
      this.queryFourthCategory();
    } else if(arrType == 'thirdCategory') {
      this.queryFourthCategory();
    }

  }


  render() {
    const {} = this.props;
    const {firstCategory, secondCategory, thirdCategory, fourthCategory} = this.state;
    return (<div className="category">
      {/*项目*/}
      {
        firstCategory && firstCategory.length > 0 &&
        <div className="border-bottom category__item">
          <FlexBoxAlignCenter>
            <div className="category__title">项目：</div>
            {
              firstCategory.map((item, index) => (
                <div key={item.dictid} className="category__content">
                  <FlexBoxAlignCenter onClick={() => {this.toggleSelect(index, 'firstCategory')}}>
                    <InputCheckBox
                      id={`first-${item.dictid}`}
                      name="first"
                      checked={!!item.checked}
                    />
                    <label>{item.dictname}</label>
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
              secondCategory.map((item, index) => (
                <div key={item.dictid} className="category__content">
                  <FlexBoxAlignCenter onClick={() => {this.toggleSelect(index, 'secondCategory')}}>
                    <InputCheckBox id={`second-${item.dictid}`} name="second" checked={!!item.checked} />
                    <label>{item.dictname}</label>
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
                  thirdCategory.map((item, index) => (
                    <div key={item.id} className="category__content">
                      <FlexBoxAlignCenter onClick={() => {this.toggleSelect(index, 'thirdCategory')}}>
                        <InputCheckBox id={`third-${item.id}`} name="third" checked={!!item.checked}  />
                        <label>{item.itemname}</label>
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
          <div className="check-wrap d-flex">
            <div className="category__title">选项二：</div>
            <div className="cow category__content_box">
              {
                fourthCategory.map((item, index) => (
                  <div key={item.id} className="category__content">
                    <FlexBoxAlignCenter onClick={() => {this.toggleSelect(index, 'fourthCategory')}}>
                      <InputCheckBox id={`third-${item.id}`} name="fourth" checked={!!item.checked}  />
                      <label>{item.itemname}</label>
                    </FlexBoxAlignCenter>
                  </div>
                ))
              }
            </div>
          </div>
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
    getAllCategory: (param) => {
      dispatch(getAllCategory(param));
    },
  };
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(CategoryFour);
