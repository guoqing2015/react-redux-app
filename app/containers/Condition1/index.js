
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {queryFirstCategory, querySecondCategory, queryThirdCategory, queryFourthCategory} from '../../redux/modules/Category/modules/actions';
import {makeSelectFirstCategory, makeSelectSecondCategory, makeSelectThirdCategory, makeSelectFourthCategory } from '../../redux/modules/Category/modules/selectors';

import cx from 'classnames';

import Wrapper from './styles/Wrapper';
import Selection from './styles/Selection';
import ListWrapper from './styles/ListWrapper';
import Ul from './styles/Ul';
import Li from './styles/Li';

import IconTriangle from 'components/IconTriangle';
import Mask from 'components/Mask';


export class Condition1 extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showList: false,
      selectedItem: {
        dictcode: '',
        dictname: '不限'
      },
      firstCategory: [
        {
          dictcode: '',
          dictname: '不限'
        }
      ]
    };
    this.toggleVisible = this.toggleVisible.bind(this);
    this.selectListItem = this.selectListItem.bind(this);
  }

  componentDidMount() {
    this.props.queryFirstCategory({
      "parentid": "",
      "parentdictcode": "project"
    });
  }

  componentWillReceiveProps(nextProps) {
    if(!this.props.firstCategory && nextProps.firstCategory) { //customerid存在了，表示登录成功
      this.setState({ firstCategory: [...this.state.firstCategory, ...nextProps.firstCategory] });
    }
  }

  /**
   * 显示、隐藏列表
   */
  toggleVisible() {
    // PubSub.publish('hideConditionMask'); // 关闭其他蒙层 (组件之间的通信)
    setTimeout((() => {
      this.setState({ showList: !this.state.showList });
    }));
  }

  /**
   * 选择类型
   */
  selectListItem(item) {
    this.toggleVisible();
    this.setState({
      selectedItem: item
    })
    this.props.onSelect(item);
  }


  render() {
    // const {  firstCategory } = this.props;
    const { showList, selectedItem, firstCategory } = this.state;
    const item = selectedItem;
    // debugger;

    return (<div >
      {/*项目*/}
      {
        firstCategory && firstCategory.length > 0 &&
        <Wrapper >
          <Selection className={cx({ current: item.dictcode !== firstCategory[0].dictcode })} onClick={this.toggleVisible} >
            <span>{ item.dictname === firstCategory[0].dictname ? "项目" : item.dictname}</span>
            <IconTriangle checked={item.dictcode !== firstCategory[0].dictcode} direction={showList} />
          </Selection>

          {
            (showList && firstCategory && firstCategory.length > 0)
              ?
              <ListWrapper>
                <Ul>
                  {
                    firstCategory.map((v, i) => {
                      return (<Li key={`item-${i}`}
                                  className={cx({ 'active': item.dictcode === v.dictcode })}
                                  onClick={ () => this.selectListItem(v) } >
                        <div className="border-bottom">{ v.dictname }</div>
                      </Li>);
                    })
                  }
                </Ul>
              </ListWrapper>
              :
              null
          }

          <Mask isShow={showList} onClick={this.toggleVisible} />
        </Wrapper>
      }

    </div>)
  }
}

Condition1.propTypes = {
  firstCategory: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.array,
  ]),
};

const mapStateToProps = createStructuredSelector({
  firstCategory: makeSelectFirstCategory(),
});


export function mapDispatchToProps(dispatch) {
  return {
    queryFirstCategory: (param) => {
      dispatch(queryFirstCategory(param));
    },
  };
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(Condition1);
