import React from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {Map} from 'immutable';
import avatarUrl from 'utils/avatarUrl';
import {createStructuredSelector} from 'reselect';
import cx from 'classnames';
import {urls} from 'setting';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {isEmpty, isMobile, isZip} from 'utils/validation';

import Button from 'components/Button';
import Icon from 'components/Icon';
import {ToastContainer, toast} from 'components/Toast';
import Loader from 'components/Loader';
import Modal from 'components/Modal';
import CopyRight from 'components/CopyRight';

import {FlexBox, FlexBoxAlignCenter, Flex} from 'components/FlexLayout';
import Toggle from 'components/Toggle';

import PageContent from './styles/PageContent';
import Label from './styles/Label';
import Ul from './styles/Ul';
import Li from './styles/Li';
import Input from './styles/Input';
import VipInfo from './styles/VipInfo';
import AvatarWrap from './styles/AvatarWrap';
import AvatarInner from './styles/AvatarInner';
import Avatar from './styles/Avatar';
import UserLvl from './styles/UserLvl';
import UserName from './styles/UserName';
import VipUser from './styles/VipUser';
import LineWrap from './styles/LineWrap';
import LineBlue from './styles/LineBlue';
import LineWhite from './styles/LineWhite';
import Trade from './styles/Trade';
import TradePrice from './styles/TradePrice';
import TariffName from './styles/TariffName';
import TariffOther from './styles/TariffOther';
import TradeTitle from './styles/TradeTitle';
import LargeFont from './styles/LargeFont';
import Lvl from './styles/Lvl';
import LvlStartDate from './styles/LvlStartDate';
import LvlEndDate from './styles/LvlEndDate';
import LvlName from './styles/LvlName';
import LvlLeftDay from './styles/LvlLeftDay';
import RenewButton from './styles/RenewButton';

import addImgPrefix from '../../utils/addImgPrefix';
import getDayDuration from '../../utils/getDayDuration';


import {queryTariff} from './modules/actions';
import {makeSelectTariff, makeSelectLoading, makeSelectError} from './modules/selectors';
import reducer from './modules/reducer';
import saga from './modules/saga';

import {app} from 'setting';

export class UserInfoPage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      dayDuration: ""
    };


  }

  componentDidMount() {
    this.props.queryTariff();
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.tariff && nextProps.tariff) { //customerid存在了，表示登录成功
      const {tariff} = nextProps;
      var allDay =  getDayDuration(tariff.startdate, tariff.enddate);
      var passDay =  getDayDuration(tariff.startdate, new Date());
      if((allDay - passDay) > 0) {
        this.setState({
          dayDuration: allDay - passDay,
          percent: passDay/allDay*100
        });
      } else {
        this.setState({
          dayDuration: 0,
          percent: 100,
        });
      }
    }
  }


  render() {
    const {loading, tariff, user} = this.props;
    const {modal, dayDuration, percent} = this.state;

    console.log(tariff);

    return (
      <div>
        <Helmet>
          <title>我的VIP</title>
          <meta name="description" content="我的VIP"/>
        </Helmet>
        <PageContent>

          <VipInfo>
            <AvatarWrap>
              <AvatarInner>
                <Avatar src={addImgPrefix(user.headportrait) || avatarUrl}></Avatar>
              </AvatarInner>
            </AvatarWrap>
            <UserName>{user.username}</UserName>
            {tariff &&
            <UserLvl>
              <Lvl>
                <LvlName>{tariff.curtariffname}</LvlName>
                <LineWrap className="clearfix">
                  <LineBlue style={ {width: `${percent}%`} }></LineBlue>
                  <LineWhite style={ {width: `${100 - percent}%`} }></LineWhite>
                </LineWrap>
                <div className="clearfix">
                  <LvlStartDate>{tariff.startdate.substring(0,10)}</LvlStartDate>
                  <LvlEndDate>{tariff.enddate.substring(0,10)}</LvlEndDate>
                </div>
                <FlexBoxAlignCenter >
                  <LvlLeftDay>剩余天数：{dayDuration}天</LvlLeftDay>
                  <Flex>
                    <RenewButton to="/renew">
                      立即续费
                    </RenewButton>
                  </Flex>
                </FlexBoxAlignCenter>
              </Lvl>
            </UserLvl>
            }

            {
              !tariff && !loading &&
              <RenewButton to="/renew">
                立即购买
              </RenewButton>
            }

          </VipInfo>


          <Trade>
            <TradeTitle className="border-bottom">交易记录</TradeTitle>
            {tariff &&
            <Ul>
              {
                tariff.traderecords.map((item, index) => (
                  <Li key={`recored-${index}`} className="border-bottom">
                    <FlexBoxAlignCenter>
                      <Flex>
                        <TariffName>
                          {item.tariffname}
                        </TariffName>
                        <TariffOther>交易日期：{item.createtime}</TariffOther>
                        <TariffOther>交易单号：{item.tradeno}</TariffOther>
                        <TariffOther>支付方式：微信</TariffOther>
                        <TariffOther>交易单号：{item.tradeno}</TariffOther>
                      </Flex>
                      <TradePrice>
                        &yen; <LargeFont>{item.tradeprice}</LargeFont>
                      </TradePrice>
                    </FlexBoxAlignCenter>
                  </Li>
                ))
              }
            </Ul>
            }
          </Trade>

          {/*<CopyRight>©2018 苏州悟本信息科技有限公司 版权所有</CopyRight>*/}
        </PageContent>

        <Loader active={loading}/>
        <Modal {...modal} close={
          () => {
            this.setState({modal: {...this.state.modal, isOpen: false}})
          }
        }></Modal>

      </div>
    );
  }
}

UserInfoPage.propTypes = {
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  loading: PropTypes.bool,
  tariff: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  queryTariff: PropTypes.func,
};


const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  tariff: makeSelectTariff(),
});


export function mapDispatchToProps(dispatch) {
  return {
    queryTariff: () => {
      dispatch(queryTariff());
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({key: 'vip', reducer});
const withSaga = injectSaga({key: 'vip', saga});

export default compose(
  withReducer,
  withSaga,
  withConnect
)(UserInfoPage);
