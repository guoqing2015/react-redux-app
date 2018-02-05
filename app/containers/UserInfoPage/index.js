import React from 'react';
import DatePicker from 'react-mobile-datepicker';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';
//import {Link} from 'react-router-dom';
import { Link, CacheLink, Control } from 'react-keeper';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {Map} from 'immutable';
import moment from 'moment';
import {createStructuredSelector} from 'reselect';
import avatarUrl from 'utils/avatarUrl';
import {urls} from 'setting';

import { isEmpty, isMobile, isZip, isEmail} from 'utils/validation';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {sexs, getSex} from 'utils/sex';
import addImgPrefix from '../../utils/addImgPrefix';

import Button from 'components/Button';
import Icon from 'components/Icon';
import {ToastContainer, toast} from 'components/Toast';
import Loader from 'components/Loader';
import Modal from 'components/Modal';

import {FlexBox, FlexBoxAlignCenter, Flex} from 'components/FlexLayout';
import Toggle from 'components/Toggle';

import PageContent from './styles/PageContent';
import AvatarBox from './styles/AvatarBox';
import Label from './styles/Label';
import Ul from './styles/Ul';
import Li from './styles/Li';
import Input from './styles/Input';
import InputFile from './styles/InputFile';
import SexSelectWrap from './styles/SexSelectWrap';


// import {makeSelectUser} from '../Auth/modules/selectors';
// import {getNoticeList, updateNoticeStatus} from './modules/actions';
// import {makeSelectNotices, makeSelectLoading, makeSelectError, makeSelectHasUnread} from './modules/selectors';

import { updateUserInfo, logout } from '../../redux/modules/Auth/modules/actions';
import { makeSelectIsUpdated, makeSelectUpdateLoading } from '../../redux/modules/Auth/modules/selectors';
import reducer from './modules/reducer';
import saga from './modules/saga';
import './index.scss';

import {app} from 'setting';

export class UserInfoPage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      user: props.user,
      isOpenDatePicker: false,
      imgCode: "",
      file: null
    }


    this.handleChange = this.handleChange.bind(this);
    this.selectFile = this.selectFile.bind(this);
    this.openDatePicker = this.openDatePicker.bind(this);
    this.handleDatePickerCancel = this.handleDatePickerCancel.bind(this);
    this.handleDatePickerSelect = this.handleDatePickerSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.logout = this.logout.bind(this);

  }

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.isUpdated == false && nextProps.isUpdated == true) {
      toast.info('保存成功');
    }
  }

  /**
   * input输入框设置value
   * @param e
   */
  handleChange(e) {
    let user = {...this.state.user};
    user[e.target.name] = e.target.value;
    this.setState({
      user
    });
  }

  openDatePicker = () => {
    this.setState({isOpenDatePicker: true});
  }

  handleDatePickerCancel = () => {
    this.setState({isOpenDatePicker: false});
  }

  handleDatePickerSelect = (time) => {
    this.setState({isOpenDatePicker: false});
    this.handleChange({
      target: {
        name: 'birthday',
        value: moment(time).format('YYYY-MM-DD')
      }
    });
  }

  handleSubmit(e) {
    debugger;
    e.preventDefault();

    const {username, mail, gender, birthday, userid} = this.state.user;


    if (mail && !isEmail(mail)) {
      toast.info('请填写正确的邮箱');
      return;
    }


    this.props.updateUserInfo({
      username,
      userid,
      mail,
      gender: gender || "",
      birthday: birthday || ""
    })
  }

  /**
   * 选择头像
   * @returns {XML}
   */
  selectFile(event) {
    var input = event.target;
    if (input.files && input.files[0]) {
      var file = input.files[0];
      var reader = new FileReader();
      reader.onload = (e) => {
        this.setState({
          imgCode: e.target.result,
          file: file
        });
      };
      reader.readAsDataURL(file);
    }
  }

  /**
   * 退出
   */
  logout() {
    this.props.logout();
    this.props.history.push('login');
  }


  render() {
    const {updateLoading, logout} = this.props;
    const {modal, user, isOpenDatePicker, imgCode} = this.state;


    return (
      <div>
        <Helmet>
          <title>个人信息</title>
          <meta name="description" content="个人信息"/>
        </Helmet>
        <PageContent>
          <AvatarBox>
            <FlexBoxAlignCenter>
              <Label>头像</Label>
              <Flex>
                <img src={imgCode || (addImgPrefix(user.headportrait) || avatarUrl)} alt=""/>
                {/*<InputFile type="file" accept="image/jpeg, image/png" onChange={this.selectFile}/>*/}
              </Flex>
            </FlexBoxAlignCenter>
          </AvatarBox>

          <Ul>
            <Li className="border-bottom">
              <FlexBox>
                <Label>真实姓名</Label>
                <Flex>
                  <Input name="username" type="text" placeholder="真实姓名" maxLength="20" value={user.username}
                         onChange={this.handleChange}/>
                </Flex>
                <Icon className="iconfont icon-right" color="#cccccc"/>

              </FlexBox>
            </Li>
            <Li className="border-bottom">
              <FlexBox>
                <Label>手机号</Label>
                <Flex>
                  <Input name="mobile" type="tel" placeholder="手机号" maxLength="11" value={user.mobile} readonly/>
                </Flex>
                <div className="visible-hidden">
                    <Icon className="iconfont icon-right" color="#cccccc"/>
                </div>
              </FlexBox>
            </Li>
            <Li className="border-bottom">
              <FlexBox>
                <Label>邮箱</Label>
                <Flex>
                  <Input name="mail" type="text" placeholder="邮箱" value={user.mail} onChange={this.handleChange}/>
                </Flex>
                <Icon className="iconfont icon-right" color="#cccccc"/>
              </FlexBox>
            </Li>
            <Li className="border-bottom">
              <FlexBox>
                <Label>性别</Label>
                <Flex>
                  <Input type="text" placeholder="性别" value={getSex(user.gender)} readOnly/>
                  <SexSelectWrap>
                    <Toggle value={user.gender} values={sexs} onToggle={this.handleChange} name={"gender"}
                            className={'sex-select'}></Toggle>
                  </SexSelectWrap>
                </Flex>
                <Icon className="iconfont icon-right" color="#cccccc"/>
              </FlexBox>
            </Li>
            <Li className="border-bottom">
              <FlexBox>
                <Label>生日</Label>
                <Flex>
                  <div className="text-right" name="birthday" type="text" onClick={this.openDatePicker}>{user.birthday || '生日'}</div>
                </Flex>
                <Icon className="iconfont icon-right" color="#cccccc"/>
              </FlexBox>
            </Li>
            <Li className="border-bottom">
              <FlexBox>
                <Label>班级</Label>
                <Flex>
                  <Input name="name" type="text" placeholder="班级" value={user.classnames} onChange={this.handleChange} readonly/>
                </Flex>
                <div className="visible-hidden">
                  <Icon className="iconfont icon-right" color="#cccccc"/>
                </div>
              </FlexBox>
            </Li>
            <li className="user-info_address_li border-bottom">
              <Link to="/address">
                <div className="d-flex align-items-center">
                  <Label>地址管理</Label>
                  <div className="col ">
                    {!user.provincename &&
                    <Input name="name" type="text" placeholder="地址管理" readonly value=""/>
                    }
                    {user.provincename &&
                    <div className="user-info-address">
                      {user.provincename + user.cityname + user.countyname + user.homeaddress}
                    </div>
                    }
                  </div>
                  <Icon className="iconfont icon-right" color="#cccccc"/>
                </div>
              </Link>
            </li>
          </Ul>


           {/*<Button onClick={this.logout}>退出</Button>*/}
          <Button onClick={this.handleSubmit}>保存</Button>
        </PageContent>


        <DatePicker
          theme="android"
          dateFormat={['YYYY年', 'MM月', 'DD日']}
          value={(new Date(user.birthday.replace(/-/g, '/')))}
          isOpen={isOpenDatePicker}
          onSelect={this.handleDatePickerSelect}
          onCancel={this.handleDatePickerCancel}/>

        <ToastContainer />
        <Loader active={updateLoading}/>
        <Modal {...modal} close={
          ()=>{this.setState({ modal: { ...this.state.modal, isOpen: false }})
          }
        }></Modal>

      </div>
    );
  }
}

UserInfoPage.propTypes = {
  logout: PropTypes.func,
};


const mapStateToProps = createStructuredSelector({
  // user: makeSelectUser(),
  isUpdated: makeSelectIsUpdated(),
  updateLoading: makeSelectUpdateLoading()
});


export function mapDispatchToProps(dispatch) {
  return {
    logout: () => {
      dispatch(logout());
    },
    updateUserInfo: (param) => {
      dispatch(updateUserInfo(param))
    }
    // updateNoticeStatus: (notice) => {
    //   dispatch(updateNoticeStatus(notice))
    // }
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({key: 'userInfo', reducer});
const withSaga = injectSaga({key: 'userInfo', saga});

export default compose(
  withReducer,
  withSaga,
  withConnect
)(UserInfoPage);
