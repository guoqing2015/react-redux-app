import React from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {Map} from 'immutable';
import moment from 'moment';
import {createStructuredSelector} from 'reselect';
import cx from 'classnames';
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



import {queryAddress, updateAddress} from './modules/actions';
import {makeSelectUserAddress, makeSelectLoading, makeSelectError, makeSelectIsUpdateSuccess} from './modules/selectors';
import reducer from './modules/reducer';
import saga from './modules/saga';

import {app} from 'setting';

export class UserInfoPage extends React.PureComponent {
  /**
   *
   */
  constructor(props) {
    super(props);

    this.state = {
      userAddress: this.props.userAddress
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  componentDidMount() {
    this.props.queryAddress();
  }

  componentWillReceiveProps(nextProps) {
    if(JSON.stringify(this.props.userAddress) != JSON.stringify(nextProps.userAddress)) {
      this.setState({
        userAddress: nextProps.userAddress
      })
    }

    if(!this.props.error && nextProps.error) {
      this.setState({
        modal: {
          isOpen: true,
          children: nextProps.error.errmsg,
        }
      })
    }


    if(this.props.isUpdateSuccess == false && nextProps.isUpdateSuccess == true) {
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

    const {detail_address, recipient_name, mobile, postcode} = this.state.userAddress;

    if (isEmpty(detail_address)) {
      toast.info('请填写详细地址');
      return;
    }

    if (isEmpty(recipient_name)) {
      toast.info('请填写收货人');
      return;
    }

    if (isEmpty(mobile)) {
      toast.info('请填写联系电话');
      return;
    }

    if (!isMobile(mobile)) {
      toast.info('请输入正确的联系电话');
      return;
    }

    if(!isZip(postcode)) {
      toast.info('请输入邮政编码');
      return;
    }


    let param = {
      "address_info": {
        "cust_id": parseInt(this.props.user.id),
        "province_code": "天津",
        "city_code": "河北",
        "is_default": 1,

        ...this.state.userAddress
      }
    };
    this.props.updateAddress(param);
  }



  render() {
    const {loading} = this.props;
    const { modal, user, userAddress } = this.state;


    return (
      <div>
        <Helmet>
          <title>统计</title>
          <meta name="description" content="统计"/>
        </Helmet>
        <PageContent>
          <Ul>

            <Li className="border-bottom">
              <FlexBox>
                <Label>区域</Label>
                <Flex>
                  <Input name="detail_address" type="text" placeholder="区域" maxLength="100" value={userAddress.detail_address} onChange={this.handleChange} />
                </Flex>
                <Icon className="iconfont icon-right" color="#cccccc"/>
              </FlexBox>
            </Li>

          </Ul>


          <Button onClick={this.handleSubmit}>保存</Button>

        </PageContent>

        <ToastContainer />
        <Loader active={loading}/>
        <Modal {...modal} close={
        ()=>{this.setState({ modal: { ...this.state.modal, isOpen: false }})
       }
        }></Modal>

      </div>
    );
  }
}

UserInfoPage.propTypes = {
  userAddress: PropTypes.object,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  loading: PropTypes.bool,
  queryAddress: PropTypes.func,
  updateAddress: PropTypes.func,
  isUpdateSuccess: PropTypes.bool,
};


const mapStateToProps = createStructuredSelector({
  userAddress: makeSelectUserAddress(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  isUpdateSuccess: makeSelectIsUpdateSuccess(),

});


export function mapDispatchToProps(dispatch) {
  return {
    queryAddress: () => {
      dispatch(queryAddress());
    },
    updateAddress: (param) => {
      dispatch(updateAddress(param))
    }
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({key: 'address', reducer});
const withSaga = injectSaga({key: 'address', saga});

export default compose(
  withReducer,
  withSaga,
  withConnect
)(UserInfoPage);
