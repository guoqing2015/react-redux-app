import React from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {Map} from 'immutable';
import {createStructuredSelector} from 'reselect';
//import {Link} from 'react-router-dom';
import { Link, CacheLink, Control } from 'react-keeper';
import {urls} from 'setting';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {isEmpty, isMobile, isPassword} from 'utils/validation';
import addImgPrefix from 'utils/addImgPrefix';
import avatarUrl from 'utils/avatarUrl';

import Icon from 'components/Icon';
import CopyRight from 'components/CopyRight';

import PageContent from './styles/PageContent';
import Header from './styles/Header';
import UserHeader from './styles/UserHeader';
import Notice from './styles/Notice';
import UserName from './styles/UserName';
import SectionBox from './styles/SectionBox';
import SectionInner from './styles/SectionInner';
import RightLine from './styles/RightLine';
import SectionBoxExtend from './styles/SectionBoxExtend';
import Ul from './styles/Ul';
import Li from './styles/Li';
import Text from './styles/Text';
import IconWrap from './styles/IconWrap';
import IconInner from './styles/IconInner';
import ExpirationDate from './styles/ExpirationDate';
import IconArrowWrap from './styles/IconArrowWrap';
import ListPad from './styles/ListPad';


//import {makeSelectUser} from '../Auth/modules/selectors';

import {makeSelectHasUnread, makeSelectNotices} from '../NoticePage/modules/selectors';

import {getNoticeList} from '../NoticePage/modules/actions';

import reducer from './modules/reducer';
import saga from './modules/saga';


import {app} from 'setting';

export class MemberPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   *
   */
  constructor(props) {
    super(props);


  }

  componentDidMount() {
    this.props.getNoticeList();
  }

  componentWillReceiveProps(nextProps) {


  }


  render() {
    const {user} = this.props;
    return (
      <div>
        <Helmet>
          <title>我</title>
          <meta name="description" content="我"/>
        </Helmet>
        <PageContent>
          <Header>
            <UserHeader>
              <Link to="/user-info">
                <img src={addImgPrefix(user.headportrait) || avatarUrl} alt=""/>
              </Link>
            </UserHeader>
            <UserName>
              {user.classnames}，{user.username}，你好！
            </UserName>
            <Link to="/notice">
              <Notice />
            </Link>

          </Header>
          <SectionBox className="border-bottom">
            <SectionInner>
              <Icon className="iconfont icon-tongban" size="1rem" color="#FFB034"/>
              <Text>{user.wallet} 铜板</Text>
              <RightLine className="border-right"/>
            </SectionInner>
            <SectionInner>
              <Link to="/collect">
                <Icon className="iconfont icon-shoucang11" size="1rem" color="#9DA3ED"/>
                <Text>我的收藏</Text>
              </Link>
            </SectionInner>
          </SectionBox>

          <SectionBoxExtend className="border-top-bottom">
            <Link to="/vip">
              <ListPad>
                <IconWrap>
                  <IconInner>
                    <Icon className="iconfont icon-vip" color="#FFCC1C"/>
                  </IconInner>
                </IconWrap>
                <span>我的VIP会员</span>
                <IconArrowWrap>
                  <Icon className="iconfont icon-right" color="#cccccc"/>
                </IconArrowWrap>
                {/*<ExpirationDate>2017-11-11到期</ExpirationDate>*/}
              </ListPad>
            </Link>
          </SectionBoxExtend>

          <Ul className="border-top-bottom">
            <Li className="border-bottom">
              <ListPad>
                <IconWrap>
                  <IconInner>
                    <Icon className="iconfont icon-ceshijilu" size="1.3rem" color="#AE91DF" />
                  </IconInner>
                </IconWrap>
                测试记录
                <IconArrowWrap>
                  <Icon className="iconfont icon-right" color="#cccccc"/>
                </IconArrowWrap>
              </ListPad>
            </Li>
            <Li>
              <Link to="/exercise-list">
                <ListPad>
                  <IconWrap>
                    <IconInner>
                      <Icon className="iconfont icon-icon_lianxijilu_normal" color="#64B5E8"/>
                    </IconInner>
                  </IconWrap>
                  练习记录
                  <IconArrowWrap>
                    <Icon className="iconfont icon-right" color="#cccccc"/>
                  </IconArrowWrap>
                </ListPad>
              </Link>
            </Li>
          </Ul>

          <SectionBoxExtend>
            <Link to="/about">
              <ListPad>
                <IconWrap>
                  <IconInner>
                    <Icon className="iconfont icon-guanyuwomen" size="1.3rem" color="#C1C0BE" />
                  </IconInner>
                </IconWrap>
                <span>关于</span>
                <IconArrowWrap>
                  <Icon className="iconfont icon-right" color="#cccccc"/>
                </IconArrowWrap>
              </ListPad>
            </Link>
          </SectionBoxExtend>

          <CopyRight>©2017 苏州悟本信息科技有限公司 版权所有</CopyRight>
        </PageContent>


      </div>
    );
  }
}

MemberPage.propTypes = {
  getNoticeList: PropTypes.func,
  user: PropTypes.object,
  //error: PropTypes.oneOfType([
  //  PropTypes.object,
  //  PropTypes.bool,
  //]),
  //hasUnreadg: PropTypes.bool,
  //customerid: PropTypes.number,
};


const mapStateToProps = createStructuredSelector({
  //loading: makeSelectLoading(),
  //error: makeSelectError(),
  //customerid: makeSelectCustomerid(),
  //user: makeSelectUser(),
  //hasUnread: makeSelectHasUnread()
});


export function mapDispatchToProps(dispatch) {
  return {
    getNoticeList: () => {
      dispatch(getNoticeList());
    }
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({key: 'member', reducer});
const withSaga = injectSaga({key: 'member', saga});

export default compose(
  withReducer,
  withSaga,
  withConnect
)(MemberPage);
