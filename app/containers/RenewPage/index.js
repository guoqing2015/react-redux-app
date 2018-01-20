import React from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {Map} from 'immutable';
import axios from 'axios';
// import moment from 'moment';
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

import Toggle from 'components/Toggle';


import {queryTariff} from './modules/actions';
import {makeSelectTariff, makeSelectLoading, makeSelectError} from './modules/selectors';
import reducer from './modules/reducer';
import saga from './modules/saga';

import {app} from 'setting';
import './index.scss';

export class RenewPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   *
   */
  constructor(props) {
    super(props);

    this.state = {
      selectedTariffIndex: 0,
      isLoading: false
    };
    this.pay = this.pay.bind(this);
  }

  componentDidMount() {
    this.props.queryTariff();
  }

  selectTariff(item, index) {
    this.setState({
      selectedTariffIndex: index
    })
  }

  pay() {


    const tariff = this.props.tariff[this.state.selectedTariffIndex]
    if(!tariff) {
      toast.info('请选择一个套餐');
      return;
    }
    const param = {
      openid: this.props.user.openid,
      userid: this.props.user.userid,
      username: this.props.user.username,
      tradetype: "JSAPI",
      tariffid: tariff.id,
      tariffname: tariff.tariffname,
      tradeprice: tariff.discountprice * 100, //价格转成分
      tradedesc: tariff.tariffdesc || "",
    };
    console.log(JSON.stringify(param, 2, 2))

    // var data = {
    //   "errcode": 7001,
    //   "errmsg": "",
    //   "content": "{\"appId\":\"wx2d99c08880285503\",\"nonceStr\":\"cb0be8015611402e922e13553e2ed5b6\",\"package\":\"prepay_id=wx20180118105800fed71a446c0450986312\",\"paySign\":\"48BF4D1F0E3EC787C9B42411064DEDC0\",\"signType\":\"MD5\",\"timeStamp\":\"1516244354\"}"
    // };

    this.setState({
      isLoading: true
    })


    axios.post(urls.TARIFF_TRADE_URL, param)
      .then((data) => {
        if (data.errcode == 7001) {
          const content = JSON.parse(data.content);
          onBridgeReady(content)
        } else {
          toast.info(response.errmsg);
          this.setState({
            isLoading: false
          })
        }
      })
      .catch((error) => {
        toast.info('获取验证码失败 ' + error);
        this.setState({
          isLoading: false
        })
      })

    function onBridgeReady(payInfo) {
      debugger;
      WeixinJSBridge.invoke(
        'getBrandWCPayRequest', {
          "appId": payInfo.appId,     //公众号名称，由商户传入
          "timeStamp": payInfo.timeStamp,         //时间戳，自1970年以来的秒数
          "nonceStr": payInfo.nonceStr, //随机串
          "package": payInfo.package,
          "signType": payInfo.signType,         //微信签名方式：
          "paySign": payInfo.paySign, //微信签名
        },
        function (res) {
          if (res.err_msg == "get_brand_wcpay_request:ok") {
          }     // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。
        }
      );
    }

    if (typeof WeixinJSBridge == "undefined") {
      if (document.addEventListener) {
        document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
      } else if (document.attachEvent) {
        document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
        document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
      }
    } else {
      onBridgeReady();
    }
  }

  componentWillReceiveProps(nextProps) {

  }


  render() {
    const {loading, tariff} = this.props;
    const {modal, user, selectedTariffIndex, isLoading} = this.state;

    console.log(tariff);

    return (
      <div>
        <Helmet>
          <title>续费</title>
          <meta name="description" content="续费"/>
        </Helmet>


        <section className="renew">

          <ul className="clearfix">
            {
              tariff &&
              tariff.map((item, index) => {
                return (
                  <li key={`${index}`} onClick={() => {
                    this.selectTariff(item, index)
                  }} className={cx({'active': index == selectedTariffIndex})}>
                    <div className="renew__li_inner">
                      <div className="tariffname">
                        {item.tariffname}
                      </div>
                      <div className="discountprice">
                        <dfn>&yen;</dfn>
                        {item.discountprice}
                      </div>
                      <div className="primeprice">
                        <dfn>&yen;</dfn>
                        {item.primeprice}
                      </div>
                    </div>
                  </li>
                )
              })
            }
          </ul>
          {
            tariff && tariff[selectedTariffIndex] &&

            <div className="renew__explain">
              <h3>套餐说明</h3>
              <div>
                <label>套餐名：</label>
                <span>{tariff[selectedTariffIndex].tariffname}</span>
              </div>
              <div>
                <label>有效期：</label>
                <span>{tariff[selectedTariffIndex].vailddays}天</span>
              </div>
              <div>
                <label>分类：</label>
                <span>{tariff[selectedTariffIndex].projectname}</span>
              </div>
              <div className="discountprice">
                <label>折扣价：</label>
                <span>&yen;{tariff[selectedTariffIndex].discountprice}</span>
              </div>
              <div>
                <label>原价：</label>
                <span className="primeprice">&yen;{tariff[selectedTariffIndex].primeprice}</span>
              </div>
              <div>
                <label>说明：</label>
                <span dangerouslySetInnerHTML={{__html: tariff[selectedTariffIndex].tariffdesc}}></span>
              </div>
            </div>
          }


          <footer>
            <span>
              订单总额：<span className="renew__pay__price">
              <dfn>&yen;</dfn>
              {
                tariff && tariff[selectedTariffIndex] &&
                <span>{tariff[selectedTariffIndex].discountprice}</span>
              }
            </span>
            </span>
            <button className="renew__pay__button" onClick={this.pay}>确认支付</button>
          </footer>
        </section>

        <ToastContainer />
        <Loader active={loading || isLoading}/>
        <Modal {...modal} close={
          () => {
            this.setState({modal: {...this.state.modal, isOpen: false}})
          }
        }></Modal>

      </div>
    );
  }
}

RenewPage.propTypes = {
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  loading: PropTypes.bool,
  tariff: PropTypes.oneOfType([
    PropTypes.array,
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

const withReducer = injectReducer({key: 'renew', reducer});
const withSaga = injectSaga({key: 'renew', saga});

export default compose(
  withReducer,
  withSaga,
  withConnect
)(RenewPage);
