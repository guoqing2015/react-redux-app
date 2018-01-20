import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import cx from 'classnames';
import { createStructuredSelector } from 'reselect';

// import PubSub from 'pubsub-js';

import Icon from 'components/Icon';
import {FlexBox, FlexBoxAlignCenter, Flex} from 'components/FlexLayout';

import Wrapper from './styles/Wrapper';
import Selection from './styles/Selection';
import ListWrapper from './styles/ListWrapper';
import Ul from './styles/Ul';
import Li from './styles/Li';
import Label from './styles/Label';
import Left from './styles/Left';
import Right from './styles/Right';
import ButtonWrap from './styles/ButtonWrap';
import Reset from './styles/Reset';
import Confirm from './styles/Confirm';
import TimeWrap from './styles/TimeWrap';

import IconTriangle from 'components/IconTriangle';
import Mask from 'components/Mask';

import {queryFirstCategory, querySecondCategory, queryThirdCategory, queryFourthCategory} from '../../redux/modules/Category/modules/actions';
import {makeSelectFirstCategory, makeSelectSecondCategory, makeSelectThirdCategory, makeSelectFourthCategory } from '../../redux/modules/Category/modules/selectors';

export class Condition2 extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      showList: false,
      isPass: false,
      startDate: "",
      endDate: "",
      categorycodeArray: [],
      itemcodeArray: [],
      subitemcodeArray: [],
    };

    this.toggleVisible = this.toggleVisible.bind(this);
    this.selectListItem = this.selectListItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.reset = this.reset.bind(this);
    this.confirm = this.confirm.bind(this);
  }

  componentDidMount() {
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


  reset() {
    this.setState({
      startDate: "",
      endDate: "",
      categorycodeArray: [],
      itemcodeArray: [],
      subitemcodeArray: [],
    });
  }

  confirm() {


    let categorycode = [];
    this.state.categorycodeArray.forEach((item) => {
      categorycode.push(item.dictcode);
    });
    categorycode = categorycode.join('/');

    let itemcode = [];
    this.state.itemcodeArray.forEach((item) => {
      itemcode.push(item.itemcode);
    });
    itemcode = itemcode.join('/');

    let subitemcode = [];
    this.state.subitemcodeArray.forEach((item) => {
      subitemcode.push(item.itemcode);
    });
    subitemcode = subitemcode.join('/');

    this.props.onSelect({
      categorycode,
      itemcode,
      subitemcode
    });
    this.toggleVisible();
  }

  /**
   * 显示、隐藏列表
   */
  toggleVisible() {
    // PubSub.publish('hideConditionMask'); // 关闭其他蒙层 (组件之间的通信)
    setTimeout((() => {
      this.setState({showList: !this.state.showList});
    }));
  }

  /**
   * 选择类型
   */
  selectListItem(item) {
    this.toggleVisible();
    this.props.onSelect(item);
  }


  /**
   * input输入框设置value
   * @param e
   */
  handleChange(e) {
    this.setState({
      [e.target.name] : e.target.value,
    });
  }


  handleSelect(item, arrType) {
    let arr = [...this.state[arrType]];
    let index = arr.indexOf(item);
    if(index == -1) {
      arr.push(item)
    } else {
      arr.splice(index, 1)
    }
    this.setState({
      [arrType]: arr
    })

    // this.setState({
    //   [name]: true
    // });
  }

  render() {
    const {secondCategory, thirdCategory, fourthCategory} = this.props;
    const {showList,  startDate, endDate, categorycodeArray, itemcodeArray, subitemcodeArray} = this.state;

    return (
      <Wrapper>

        {/*<Selection className={cx({ current: true })} onClick={this.toggleVisible} >*/}
        <Selection onClick={this.toggleVisible}>
          <span>分类</span>
          {/*<IconTriangle checked={true} direction={showList} />*/}
          <IconTriangle direction={showList}/>
        </Selection>


        {
          (showList)
            ?
            <ListWrapper>
              <Ul>
                <Li className="filter-title">
                  分类
                </Li>
                <Li className="border-bottom">
                  <div className="clearfix">
                    {
                      secondCategory && secondCategory.length > 0 &&
                      secondCategory.map((item, index) => (
                        <Label key={`secondCategory-${index}`} className={cx({ active: categorycodeArray.indexOf(item) != -1 })} onClick={()=>{this.handleSelect(item, 'categorycodeArray')} }>{item.dictname}</Label>
                      ))
                    }
                  </div>
                </Li>

                {
                  thirdCategory && thirdCategory.length > 0 &&
                    <div>

                <Li className="filter-title">
                  选项一
                </Li>
                <Li className="border-bottom">
                  <div className="clearfix">
                    {
                      thirdCategory.map((item, index) => (
                        <Label key={`thirdCategory-${index}`} className={cx({ active: itemcodeArray.indexOf(item) != -1 })}  onClick={()=>{this.handleSelect(item, 'itemcodeArray')} }>{item.itemname}</Label>
                      ))
                    }
                  </div>
                </Li>
                    </div>
                }

                {
                  fourthCategory && fourthCategory.length > 0 &&
                  <div>
                    <Li className="filter-title">
                      选项二
                    </Li>
                    <Li className="border-bottom">
                      <div className="clearfix">
                        {
                          fourthCategory.map((item, index) => (
                            <Label key={`fourthCategory-${index}`}  className={cx({ active: subitemcodeArray.indexOf(item) != -1 })} onClick={()=>{this.handleSelect(item, 'subitemcodeArray')} }>{item.itemname}</Label>
                          ))
                        }
                      </div>
                    </Li>
                  </div>
                }

                {/*
                <Li className="filter-title">
                  时间
                </Li>
                <Li className="border-bottom">
                  <TimeWrap>
                    <FlexBoxAlignCenter>
                      <Flex className="input-wrap">
                        {
                          !startDate && <span>选择开始时间</span>
                        }
                        <input type="date" name="startDate" placeholder="开始时间" value={startDate} onChange={this.handleChange} />
                      </Flex>
                      <div className="line">
                        ——
                      </div>
                      <Flex className="input-wrap">
                        {
                          !endDate && <span>选择结束时间</span>
                        }
                        <input type="date" name="endDate" placeholder="结束时间" value={endDate} onChange={this.handleChange} />
                      </Flex>
                    </FlexBoxAlignCenter>
                  </TimeWrap>
                </Li>
                 */}

              </Ul>
              <ButtonWrap>
                <Reset onClick={this.reset}>重置</Reset>
                <Confirm onClick={this.confirm}>确定</Confirm>
              </ButtonWrap>
            </ListWrapper>
            :
            null
        }

        <Mask isShow={showList} onClick={this.toggleVisible}/>
      </Wrapper>
    );
  }
}

Condition2.propTypes = {
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
)(Condition2);

