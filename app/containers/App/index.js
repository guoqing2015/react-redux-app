import React from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';
import styled from 'styled-components';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import axios from 'axios';

// import Header from 'components/Header';
import Loader from 'components/Loader';
import Modal from 'components/Modal';

// import Auth from '../Auth';
import {
  makeSelectUser,
  makeSelectLoading,
  makeSelectError,
  makeSelectIsLoggedIn,
  makeSelectOpenid
} from '../../redux/modules/Auth/modules/selectors';
import {getUserInfo, getOpenid, setOpenid} from '../../redux/modules/Auth/modules/actions';
import getUrlParameter from '../../utils/getUrlParameter';
import {app, urls} from 'setting';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      modal: {}
    };

    this.getUserInfo = this.getUserInfo.bind(this);
    this.getOpenid = this.getOpenid.bind(this);
    this.getWxconfig = this.getWxconfig.bind(this);
  }

  componentDidMount() {
    this.getOpenid();
    this.getWxconfig();

    //TODO
     this.props.getUserInfo(
       {
         // userid:  "f8872189-6f02-4abb-87fb-8caa9b6ea301", // 17365367130
         userid:  "7ee34cf9-35e8-48be-ad50-4ada6a8f809e", //18020285885
       }
     );
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.error && nextProps.error) { //获取openid或者会员信息失败
      this.setState({
        modal: {
          isOpen: true,
          children: nextProps.error.errmsg,
        }
      })
    }

    if (!this.props.openid && nextProps.openid) { //获取openid成功后再去获取会员信息
      localStorage.setItem('OPENID', nextProps.openid)
      this.getUserInfo(nextProps.openid)
    }

  }

  /**
   * 获取微信config
   */
  getWxconfig() {

    axios.post(urls.WXCONFIG_URL, {
         url: location.href.split('#')[0]
      })
      .then((response) => {
        if (response.errcode == 7001) {
          let jssdkConfig = JSON.parse(response.content);
            wx.config({
              debug: false,
              appId: jssdkConfig.appId,
              timestamp: jssdkConfig.timestamp,
              nonceStr: jssdkConfig.nonceStr,
              signature: jssdkConfig.signature,
              jsApiList: [
                "checkJsApi",
                "startSearchBeacons",
                "stopSearchBeacons",
                "onSearchBeacons",
                'checkJsApi',
                'onMenuShareTimeline',
                'onMenuShareAppMessage',
                'onMenuShareQQ',
                'onMenuShareWeibo',
                'onMenuShareQZone',
                'hideMenuItems',
                'showMenuItems',
                'hideAllNonBaseMenuItem',
                'showAllNonBaseMenuItem',
                'previewImage',
                'hideOptionMenu',
                'showOptionMenu',
                'scanQRCode',
              ]
            });

            wx.error(function (res) {
              // alert('error: ' + JSON.stringify(res));
            })
        }
      })
      .catch((error) => {

      });
  }

  /**
   * 获取用户信息
   */
  getUserInfo(openid) {
    this.props.getUserInfo(
      {
        openid: openid,
        userid: ""
      }
    );
  }

  /**
   * 获取openid
   */
  getOpenid() {
    let code = getUrlParameter('code');
    if (code) {
      if (code == localStorage.getItem('CODE')) { //code已经被使用过了。只能从缓存中拿openid
        this.props.setOpenid({
          openid: localStorage.getItem('OPENID')
        })
      } else {
        localStorage.setItem('CODE', code);
        this.props.getOpenid({
          code: code,
        })
      }
    } else {
    }
  }


  render() {
    const {user, loading} = this.props;
    const {modal} = this.state;


    return (
      <div>
        <Helmet
          titleTemplate="%s"
          defaultTitle="郎威国际教育"
        >
          <meta name="description" content="郎威国际教育"/>
        </Helmet>
        {!loading && user && this.props.children }
        {/*TODO test*/}
        {/*this.props.children*/}
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

App.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  children: PropTypes.array.isRequired,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  openid: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  loading: PropTypes.bool,
  getOpenid: PropTypes.func,
  getUserInfo: PropTypes.func,
};


const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
  isLoggedIn: makeSelectIsLoggedIn(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  openid: makeSelectOpenid()
});


export function mapDispatchToProps(dispatch) {
  return {
    setOpenid: (param) => {
      dispatch(setOpenid(param));
    },
    getOpenid: (param) => {
      dispatch(getOpenid(param));
    },
    getUserInfo: (param) => {
      dispatch(getUserInfo(param));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

