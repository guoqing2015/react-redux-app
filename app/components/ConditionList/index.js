/**
 *
 * ConditionList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
// import PubSub from 'pubsub-js';

import Wrapper from './styles/Wrapper';
import Selection from './styles/Selection';
import ListWrapper from './styles/ListWrapper';
import Ul from './styles/Ul';
import Li from './styles/Li';

import IconTriangle from '../IconTriangle';
import Mask from '../Mask';

export class ConditionList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      showList: false,
    };

    this.toggleVisible = this.toggleVisible.bind(this);
    this.selectListItem = this.selectListItem.bind(this);
  }

  // componentDidMount() {
  //   PubSub.subscribe('hideConditionMask', (event, data) => {
  //     if (this.state.showList) {
  //       this.setState({ showList: false });
  //     }
  //   });
  // }
  //
  // componentWillUnmount() {
  //   PubSub.unsubscribe('hideConditionMask');
  // }


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
    this.props.onSelect(item);
  }


  render() {
    const { label, item, list } = this.props;
    const { showList } = this.state;
    return (
      <Wrapper>

        <Selection className={cx({ current: item.key !== list[0].key })} onClick={this.toggleVisible} >
          <span>{ item.value === list[0].value ? label : item.value}</span>
          <IconTriangle checked={item.key !== list[0].key} direction={showList} />
        </Selection>

        {
          (showList && list && list.length > 0)
            ?
            <ListWrapper>
            <Ul>
              {
                list.map((v, i) => {
                  return (<Li key={`item-${i}`}
                              className={cx({ 'active': item.key === v.key })}
                             onClick={ () => this.selectListItem(v) } >
                    <div className={cx('border-bottom ', { 'margin15': v.parent })} >{ v.value }</div>
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
    );
  }
}

ConditionList.propTypes = {
  onSelect: PropTypes.func,
  list: PropTypes.array,
  item: PropTypes.object,
  label: PropTypes.string,
};


export default ConditionList;
