import React from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {Map} from 'immutable';
import moment from 'moment';
import {createStructuredSelector} from 'reselect';
import cx from 'classnames';
import axios from 'axios';
import {urls} from 'setting';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {isEmpty, isMobile, isZip} from 'utils/validation';

import Button from 'components/Button';
import Icon from 'components/Icon';
import {ToastContainer, toast} from 'components/Toast';
import Loader from 'components/Loader';
import Modal from 'components/Modal';
import CollectDetail from 'components/CollectDetail';


import Section from './styles/Section';

import {queryDetail} from './modules/actions';
import {makeSelectDetail, makeSelectLoading, makeSelectError} from './modules/selectors';
import {queryCollect, addCollect, deleteCollect} from '../../redux/modules/Collect/modules/actions';
import {makeSelectCollectList} from '../../redux/modules/Collect/modules/selectors';

import reducer from './modules/reducer';
import saga from './modules/saga';

import {app} from 'setting';
import './index.scss'

export class CollectDetailPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modal: {},
      isCollect: true
    }
    this.toggleCollect = this.toggleCollect.bind(this);
  }

  componentDidMount() {
    this.props.params.id;
    this.props.queryDetail({
      subjectid: this.props.params.id,
      // "userid": this.props.user.userid
    });
    this.props.queryCollect();
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.error && nextProps.error) {
      this.setState({
        modal: {
          isOpen: true,
          children: nextProps.error.errmsg,
        }
      })
    }
  }

  toggleCollect(subject) {
    var method;
    const isCollect = this.state.isCollect;
    if (!isCollect) {
      method = "01"
    } else {
      method = "02"
    }
    const params = {
      method,
      userid: this.props.user.userid,
      username: this.props.user.username,
      subjectid: subject.id
    };

    this.setState({
      isCollect: !isCollect
    })
    axios.post(urls.TOGGLE_COLLECT_URL, params)
      .then((response) => {
        if (response && response.errcode == 7001) {
        } else {
        }
      })
  }

  render() {
    const {loading, detail, collectList} = this.props;
    const {modal, isCollect} = this.state;


    return (
      <div>
        <Helmet>
          <title>题目详情</title>
          <meta name="description" content="题目详情"/>
        </Helmet>
        <Section>
          <ul>
            {
              detail &&
              <CollectDetail item={detail} index={0} toggleCollect={this.toggleCollect}
                             isCollect={isCollect}></CollectDetail>
            }
          </ul>
        </Section>

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

CollectDetailPage.propTypes = {
  detail: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  collectList: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  loading: PropTypes.bool,
  queryDetail: PropTypes.func,
  queryCollect: PropTypes.func,
  addCollect: PropTypes.func,
  deleteCollect: PropTypes.func,
};


const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  detail: makeSelectDetail(),
  collectList: makeSelectCollectList()
});


export function mapDispatchToProps(dispatch) {
  return {
    queryDetail: (param) => {
      dispatch(queryDetail(param))
    },
    queryCollect: () => {
      dispatch(queryCollect())
    },
    addCollect: (param) => {
      dispatch(addCollect(param))
    },
    deleteCollect: (param) => {
      dispatch(deleteCollect(param))
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({key: 'collectDetail', reducer});
const withSaga = injectSaga({key: 'collectDetail', saga});

export default compose(
  withReducer,
  withSaga,
  withConnect
)(CollectDetailPage);
