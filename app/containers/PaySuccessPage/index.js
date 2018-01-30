import React from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {Map} from 'immutable';
import moment from 'moment';
import {createStructuredSelector} from 'reselect';
import cx from 'classnames';
import {app, urls} from 'setting';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { isEmpty, isMobile, isZip} from 'utils/validation';

import {ToastContainer, toast} from 'components/Toast';
import Loader from 'components/Loader';
import Modal from 'components/Modal';
import Button from 'components/Button';

import {queryDetail} from '../../redux/modules/Trade/modules/actions';
import {makeSelectDetail, makeSelectLoading, makeSelectError } from '../../redux/modules/Trade/modules/selectors';

// import reducer from './modules/reducer';
// import saga from './modules/saga';
import PaySuccessPic from './img/pay_success.png';
import './index.scss';

export class PaySuccessPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modal: {},
    }

    this.back = this.back.bind(this);
  }

  componentDidMount() {
    this.props.queryDetail({
      tradeno: this.props.params.id,
      serialno: ""
    });
  }

  componentWillReceiveProps(nextProps) {

  }

  back() {
    this.props.history.goBack();
  }




  render() {
    const {loading, detail} = this.props;
    console.log(detail);
    const {modal} = this.state;

    return (
      <div>
        <Helmet>
          <title>支付成功</title>
          <meta name="description" content="支付成功"/>
        </Helmet>
        {
          detail &&
        <div className="pay__page">
          <div className="pay__img-wrap">
            <img src={PaySuccessPic} alt=""/>
          </div>
          <div className="pay__msg">
            <h2>支付成功</h2>
            <p>恭喜您，成功购买{detail.tradeinfo.tariffname}，支付费用为：&yen;{detail.tradeinfo.tradeprice}</p>
            <p>套餐说明：  <span dangerouslySetInnerHTML={{__html: detail.tradeinfo.tradedesc}}></span></p>
          </div>
         <div className="pay__button-wrap">
            <a className="pay__button" onClick={this.back}>返回</a>
          </div>
        </div>
        }

        <Loader active={loading}  />
        <Modal {...modal} close={
        ()=>{this.setState({ modal: { ...this.state.modal, isOpen: false }})
       }
        }></Modal>
      </div>
    );
  }
}

PaySuccessPage.propTypes = {
  detail: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  loading: PropTypes.bool,
  queryDetail: PropTypes.func,
};


const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  detail: makeSelectDetail(),
});


export function mapDispatchToProps(dispatch) {
  return {
    queryDetail: (param) => {
      dispatch(queryDetail(param))
    },
  };
}

// const withConnect = connect(mapStateToProps, mapDispatchToProps)(PayResultPage);
export default  connect(mapStateToProps, mapDispatchToProps)(PaySuccessPage);

// const withReducer = injectReducer({key: 'payResult', reducer});
// const withSaga = injectSaga({key: 'payResult', saga});

// export default compose(
//   withReducer,
//   withSaga,
//   withConnect
// )(PayResultPage);
