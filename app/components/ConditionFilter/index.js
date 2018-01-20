import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

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

import IconTriangle from '../IconTriangle';
import Mask from '../Mask';

export class ConditionFilter extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      showList: false,
      isPass: false,
      startDate: "",
      endDate: "",
      typeCihui: false,
      typeYufa: false,
      typeXuanze: false,
      typeTiankong: false,
    };

    this.toggleVisible = this.toggleVisible.bind(this);
    this.selectListItem = this.selectListItem.bind(this);
    this.togglePass = this.togglePass.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.reset = this.reset.bind(this);
  }


  reset() {
    this.setState({
      isPass: false,
      startDate: "",
      endDate: "",
      typeCihui: false,
      typeYufa: false,
      typeXuanze: false,
      typeTiankong: false,
    });
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

  togglePass() {
    this.setState({isPass: !this.state.isPass});
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


  handleSelect(name) {
    this.setState({
      [name]: true
    });
  }

  render() {
    const {label} = this.props;
    const {showList, isPass, startDate, endDate, typeCihui, typeYufa, typeXuanze, typeTiankong} = this.state;
    return (
      <Wrapper>

        {/*<Selection className={cx({ current: true })} onClick={this.toggleVisible} >*/}
        <Selection onClick={this.toggleVisible}>
          <span>{label}</span>
          {/*<IconTriangle checked={true} direction={showList} />*/}
          <IconTriangle direction={showList}/>
        </Selection>


        {
          (showList)
            ?
            <ListWrapper>
              <Ul>

                <Li className="border-bottom">
                  <Left>
                    仅显示未通过
                  </Left>
                  <Right>
                    {
                      !isPass && <Icon className="iconfont icon-weixuanzhong" size="1.3rem" color="#666666" onClick={this.togglePass}/>
                    }
                    {
                      isPass &&
                      <Icon className="iconfont icon-xuanzhong" size="1.1rem" margin="0 0.1rem 0 0" color="#089DDD"
                            onClick={this.togglePass}/>
                    }
                  </Right>
                </Li>
                <Li className="filter-title">
                  分类
                </Li>
                <Li className="border-bottom">
                  <div className="clearfix">
                    <Label className={cx({ active: typeCihui })} onClick={()=>{this.handleSelect('typeCihui')} }>词汇</Label>
                    <Label className={cx({ active: typeYufa })} onClick={()=>{this.handleSelect('typeYufa')} }>语法</Label>
                  </div>
                  <div className="clearfix">
                    <Label className={cx({ active: typeXuanze })} onClick={()=>{this.handleSelect('typeXuanze')} }>选择题</Label>
                    <Label className={cx({ active: typeTiankong })} onClick={()=>{this.handleSelect('typeTiankong')} }>填空题</Label>
                  </div>
                </Li>
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
              </Ul>
              <ButtonWrap>
                <Reset onClick={this.reset}>重置</Reset>
                <Confirm>确定</Confirm>
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

ConditionFilter.propTypes = {
  label: PropTypes.string,
};


export default ConditionFilter;
