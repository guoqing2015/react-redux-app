import React from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {Map} from 'immutable';
import {createStructuredSelector} from 'reselect';
import axios from 'axios';
import { urls } from 'setting';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { isEmpty, isMobile, isPassword} from 'utils/validation';

import {ToastContainer, toast } from 'components/Toast';
import Loader from 'components/Loader';
import Modal from 'components/Modal';
import CountDown from 'components/CountDown';
import {FlexBox, FlexBoxAlignCenter, Flex} from 'components/FlexLayout';
import Icon from 'components/Icon';
import Logo from 'components/Logo';
import Button from 'components/Button';
import CopyRight from 'components/CopyRight';

import PageContent from './styles/PageContent';
import Section from './styles/Section';
import Ul from './styles/Ul';
import Li from './styles/Li';
import IconWrap from './styles/IconWrap';
import IconInner from './styles/IconInner';
import Input from './styles/Input';
import CodeButton from './styles/CodeButton';

import { login } from './modules/actions';
import { makeSelectCustomerid, makeSelectLoading, makeSelectError } from './modules/selectors';
import { getUserInfo, loggin } from '../../redux/modules/Auth/modules/actions';
import {makeSelectOpenid} from '../../redux/modules/Auth/modules/selectors';
import { makeSelectUser} from '../../redux/modules/Auth/modules/selectors';
import reducer from './modules/reducer';
import saga from './modules/saga';

import { app } from 'setting';

export class LoginPage extends React.PureComponent {
  /**
   *
   */
  constructor(props) {
    super(props);

    this.state = {
      phone: '',
      code: '',
      startCountDown: false,
      modal: {},
      codeInMessage: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCode = this.handleCode.bind(this);
    this.countdownCompleteCallback = this.countdownCompleteCallback.bind(this);
    this.countdownFormatFunc = this.countdownFormatFunc.bind(this);
  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {

    if(!this.props.customerid && nextProps.customerid) { //customerid存在了，表示登录成功
       this.props.getUserInfo({
         userid: nextProps.customerid
       });
       this.props.loggin();
       this.props.history.push('find');
    }
    else if(!this.props.error && nextProps.error) { //登录失败
      this.setState({
        modal: {
          isOpen: true,
          children: nextProps.error.errmsg,
        }
      })
    }

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

  /**
   * 注册
   * @param e
   */
  handleSubmit(e) {


    e.preventDefault();
    if (isEmpty(this.state.phone)) {
      toast.info('请输入手机号');
      return;
    }

    if (!isMobile(this.state.phone)) {
      toast.info('请输入正确的手机号');
      return;
    }

    if(isEmpty(this.state.code)) {
      toast.info('请输入验证码');
      return;
    }

    this.props.login({
      mobile: this.state.phone,
      verifycode: this.state.code,
      // password: "密码",
      openid: this.props.openid
    });

  }

  /**
   * 获取验证码
   * @param e
   */
  handleCode(e) {
    e.preventDefault();
    if (isEmpty(this.state.phone)) {
      toast.info('请输入手机号');
      return;
    }

    if (!isMobile(this.state.phone)) {
      toast.info('请输入正确的手机号');
      return;
    }

    if(this.state.startCountDown) return; //倒计时进行中
    //开始倒计时
    this.setState({
      startCountDown: true
    });

    axios.post(urls.VALIDATION_CODE_URL, {
      method:'login',
      mobile: this.state.phone,
    })
      .then((data) => {

        if(data.errcode == 7001) {
          this.setState({
            codeInMessage: data.content
          });
          //发送成功
        } else {
          toast.info(response.errmsg);
          //停止倒计时
          this.setState({
            startCountDown: false
          });
        }
      })
      .catch((error) => {
        //停止倒计时
        this.setState({
          startCountDown: false
        })
        toast.info('获取验证码失败 ' + error);
      });
  }

  /**
   * 倒计时的文案
   */
  countdownFormatFunc(milliseconds) {
    if(milliseconds == 0 || milliseconds == 60000) {
      return '获取验证码';
    } else {
      return Math.ceil(milliseconds/1000)+'s后重发';
    }
  }

  /**
   * 倒计时完成的回调
   */
  countdownCompleteCallback() {
	  //停止倒计时
    this.setState({
      startCountDown: false
    })
  }


  render() {
    const { loading } = this.props;
    const { startCountDown, modal } = this.state;

    return (
      <div>
        <Helmet>
          <title>会员登录</title>
          <meta name="description" content="会员登录" />
        </Helmet>
        <PageContent>
          <Section>
            <Logo />
            <Ul>
              <Li className="border-bottom">
                <FlexBox>
                  <IconWrap>
                    <IconInner>
                      <Icon className="iconfont icon-shouji" size="1.1rem" />
                    </IconInner>
                  </IconWrap>
                  <Flex>
                    <Input name="phone" type="tel" placeholder="手机号" maxLength="11" value={this.state.phone} onChange={this.handleChange} />
                  </Flex>
                  <CodeButton onClick={this.handleCode} startCountDown={startCountDown}>
                    <CountDown
                      startCountDown={startCountDown}
                      initialTimeRemaining={60000}
                      interval={1000}
                      formatFunc={this.countdownFormatFunc}
                      completeCallback={this.countdownCompleteCallback}
                    />
                  </CodeButton>
                </FlexBox>
              </Li>

              <Li className="border-bottom">
                <FlexBox>
                  <IconWrap>
                    <IconInner>
                      <Icon className="iconfont icon-yanzhengma" size="1rem" />
                    </IconInner>
                  </IconWrap>
                  <Flex>
                    <Input name="code" type="tel" placeholder="输入手机验证码" maxLength="4" value={this.state.code} onChange={this.handleChange} />
                  </Flex>
                </FlexBox>
              </Li>
            </Ul>
          </Section>
            <Button onClick={this.handleSubmit}>立即登录</Button>
        </PageContent>

        <CopyRight>©2018 苏州悟本信息科技有限公司 版权所有</CopyRight>

        <ToastContainer />
        <Loader active={loading}  />
        <Modal {...modal} close={
        ()=>{this.setState({ modal: { ...this.state.modal, isOpen: false }})
       }
        }></Modal>



      </div>
    );
  }
}

LoginPage.propTypes = {
  login: PropTypes.func,
  getUserInfo: PropTypes.func,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  loading: PropTypes.bool,
  customerid: PropTypes.number,
  openid: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
};


const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  customerid: makeSelectCustomerid(),
  openid: makeSelectOpenid()
});


export function mapDispatchToProps(dispatch) {
  return {
    login: (param) => {
	     dispatch(login(param));
    },
    getUserInfo: (param) => {
      dispatch(getUserInfo(param));
    },
    loggin: (param) => {
      dispatch(loggin(param));
    }
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'login', reducer });
const withSaga = injectSaga({ key: 'login', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(LoginPage);
