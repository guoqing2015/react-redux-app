import React from 'react';
//import {Link} from 'react-router-dom';
import { Link, CacheLink, Control } from 'react-keeper';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {Map} from 'immutable';
import moment from 'moment';
import {createStructuredSelector} from 'reselect';
import cx from 'classnames';
// import { Field, reduxForm } from 'redux-form'

import {urls} from 'setting';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { isEmpty, isMobile, isZip} from 'utils/validation';

import Button from 'components/Button';
import Icon from 'components/Icon';
import {ToastContainer, toast} from 'components/Toast';
import Loader from 'components/Loader';
import Modal from 'components/Modal';

import {FlexBox, FlexBoxAlignCenter, Flex} from 'components/FlexLayout';
import Toggle from 'components/Toggle';

import PageContent from './styles/PageContent';
import Label from './styles/Label';
import Ul from './styles/Ul';
import Li from './styles/Li';
import Input from './styles/Input';
import Right from './styles/Right';


import { makeSelectLocation } from '../../redux/modules/Area/modules/selectors';

import { updateUserInfo } from '../../redux/modules/Auth/modules/actions';
import { makeSelectIsUpdated, makeSelectUpdateLoading } from '../../redux/modules/Auth/modules/selectors';
//import {queryAddress, updateAddress} from './modules/actions';
//import {makeSelectUserAddress, makeSelectLoading, makeSelectError, makeSelectIsUpdateSuccess, makeSelectIsLoaded} from './modules/selectors';
//import reducer from './modules/reducer';
//import saga from './modules/saga';

import {app} from 'setting';
import './index.scss';

export class AddressPage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      userAddress: this.props.user
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
  }


  componentWillReceiveProps(nextProps) {
    //if(JSON.stringify(this.props.userAddress) != JSON.stringify(nextProps.userAddress)) {
    //  this.setState({
    //    userAddress: nextProps.userAddress
    //  })
    //}
    //
    //if(!this.props.error && nextProps.error) {
    //  this.setState({
    //    modal: {
    //      isOpen: true,
    //      children: nextProps.error.errmsg,
    //    }
    //  })
    //}


    if(nextProps.location) {
      const provincename = nextProps.location.get('provincename');
      const cityname = nextProps.location.get('cityname');
      const countyname = nextProps.location.get('countyname');
      if(provincename && cityname && countyname) {
        let userAddress = {...this.state.userAddress};
        userAddress.provincename = provincename;
        userAddress.cityname = cityname;
        userAddress.countyname = countyname;
        userAddress.provinceid = nextProps.location.get('provinceid');
        userAddress.cityid = nextProps.location.get('cityid');
        userAddress.countyid = nextProps.location.get('countyid');
        this.setState({
          userAddress
        });
      }
    }

    console.log('this.props.isUpdated', this.props.isUpdated)

    if(this.props.isUpdated == false && nextProps.isUpdated == true) {
      toast.info('保存成功');
    }

  }

  /**
   * input输入框设置value
   * @param e
   */
  handleChange(e) {
    let userAddress = {...this.state.userAddress};
    userAddress[e.target.name] = e.target.value;
    this.setState({
      userAddress
    });
  }


  /**
   * 保存地址
   */
  handleSubmit(e) {
    e.preventDefault();

    const {provincename, cityname, countyname, homeaddress, nickname, telephone, zipcode} = this.state.userAddress;

    if (isEmpty(provincename) || isEmpty(cityname)) {
      toast.info('请选择区域');
      return;
    }

    if (isEmpty(homeaddress)) {
      toast.info('请填写详细地址');
      return;
    }

    if (isEmpty(nickname)) {
      toast.info('请填写收货人');
      return;
    }

    if (isEmpty(telephone)) {
      toast.info('请填写联系电话');
      return;
    }

    if (!isMobile(telephone)) {
      toast.info('请输入正确的联系电话');
      return;
    }

    if(!isZip(zipcode)) {
      toast.info('请输入正确的邮政编码');
      return;
    }

    this.props.updateUserInfo(this.state.userAddress)
  }



  render() {
    const {updateLoading } = this.props;
    const { modal, userAddress } = this.state;

    return (
      <div>
        <Helmet>
          <title>地址管理</title>
          <meta name="description" content="地址管理"/>
        </Helmet>
        <PageContent>
          <Ul>
            <Li className="border-bottom">
              <Link to="/area">
              <FlexBox>
                <Label>区域</Label>
                <Flex>
                  {
                    (userAddress.provincename || userAddress.cityname || userAddress.countyname) ?
                    <Right>
                      {userAddress.provincename}
                      {userAddress.cityname}
                      {userAddress.countyname}
                    </Right>
                      :
                      <Input type="text" placeholder="区域" readonly />
                  }

                </Flex>
                <Icon className="iconfont icon-right" color="#cccccc"/>
              </FlexBox>
            </Link>
            </Li>

            <Li className="border-bottom">
              <FlexBox>
                <Label>详细地址</Label>
                <Flex>
                  <Input name="homeaddress" type="text" placeholder="详细地址" maxLength="100" value={userAddress.homeaddress} onChange={this.handleChange} />
                </Flex>
                <Icon className="iconfont icon-right" color="#cccccc"/>
              </FlexBox>
            </Li>

            <Li className="border-bottom">
              <FlexBox>
                <Label>收货人</Label>
                <Flex>
                  <Input name="nickname" type="text" placeholder="收货人" maxLength="20" value={userAddress.nickname} onChange={this.handleChange} />
                </Flex>
                <Icon className="iconfont icon-right" color="#cccccc"/>
              </FlexBox>
            </Li>
            <Li className="border-bottom">
              <FlexBox>
                <Label>联系电话</Label>
                <Flex>
                  <Input name="telephone" type="tel" placeholder="联系电话" maxLength="11" value={userAddress.telephone} onChange={this.handleChange} />
                </Flex>
                <Icon className="iconfont icon-right" color="#cccccc"/>
              </FlexBox>
            </Li>

            <Li className="border-bottom">
              <FlexBox>
                <Label>邮编</Label>
                <Flex>
                  <Input name="zipcode" type="tel" placeholder="邮编" maxLength="6" value={userAddress.zipcode} onChange={this.handleChange} />
                </Flex>
                <Icon className="iconfont icon-right" color="#cccccc"/>
              </FlexBox>
            </Li>


          </Ul>


          <Button onClick={this.handleSubmit}>保存</Button>

        </PageContent>

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

AddressPage.propTypes = {
  //userAddress: PropTypes.object,
  //error: PropTypes.oneOfType([
  //  PropTypes.object,
  //  PropTypes.bool,
  //]),
  //loading: PropTypes.bool,
  //queryAddress: PropTypes.func,
  //updateAddress: PropTypes.func,
  //isUpdateSuccess: PropTypes.bool,
  //isLoaded: PropTypes.bool,
  updateUserInfo: PropTypes.func,
  location: PropTypes.object
};


const mapStateToProps = createStructuredSelector({
  //userAddress: makeSelectUserAddress(),
  //loading: makeSelectLoading(),
  //error: makeSelectError(),
  //isUpdateSuccess: makeSelectIsUpdateSuccess(),
  isUpdated: makeSelectIsUpdated(),
  updateLoading: makeSelectUpdateLoading(),
  location: makeSelectLocation(),
  //isLoaded: makeSelectIsLoaded()
});


export function mapDispatchToProps(dispatch) {
  return {
    //queryAddress: () => {
    //  dispatch(queryAddress());
    //},
    updateUserInfo: (param) => {
      dispatch(updateUserInfo(param))
    }
  };
}

//const withConnect = connect(mapStateToProps, mapDispatchToProps);

//const withReducer = injectReducer({key: 'address', reducer});
//const withSaga = injectSaga({key: 'address', saga});
export default connect(mapStateToProps, mapDispatchToProps)(AddressPage);

/*export default compose(
  withReducer,
  withSaga,
  withConnect
)(
  AddressPage
/!*  reduxForm({
    form: 'address',
    destroyOnUnmount: false
  })(AddressPage)*!/
);*/
