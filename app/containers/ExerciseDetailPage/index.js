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
import TestDetail from 'components/TestDetail';
import SubjectList from 'components/SubjectList';

import Section from './styles/Section';

import {queryDetail} from './modules/actions';
import {makeSelectDetail, makeSelectLoading, makeSelectError } from './modules/selectors';
import {queryCollect, addCollect, deleteCollect} from '../../redux/modules/Collect/modules/actions';
import { makeSelectCollectList } from '../../redux/modules/Collect/modules/selectors';

import reducer from './modules/reducer';
import saga from './modules/saga';

import {app} from 'setting';

export class ExerciseDetailPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modal: {}
    }

    this.toggleCollect = this.toggleCollect.bind(this);
  }

  componentDidMount() {
    this.props.queryDetail({
      "practiceid": this.props.params.id,
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

  toggleCollect(subject, isCollect) {
    var method,collect;
    if(!isCollect) {
      method = "01"
      collect = this.props.addCollect;
    } else {
      method = "02"
      collect = this.props.deleteCollect;
    }
    collect({
      param: {
        method,
        subjectid: subject.subjectid,
        userid: this.props.user.userid,
        username: this.props.user.username,
      },
      subject
    });
  }

  render() {
    const {loading, detail, collectList} = this.props;
    const {modal} = this.state;



    return (
      <div>
        <Helmet>
          <title>练习详情</title>
          <meta name="description" content="练习详情"/>
        </Helmet>
          <Section>
            <TestDetail detail={detail}  page={'exerciseDetail'}></TestDetail>
            <SubjectList list={(detail && detail.subjectinfo) || false} toggleCollect={this.toggleCollect} collectList={collectList}></SubjectList>
          </Section>

        <Loader active={loading}  />
        <Modal {...modal} close={
        ()=>{this.setState({ modal: { ...this.state.modal, isOpen: false }})
       }
        }></Modal>
      </div>
    );
  }
}

ExerciseDetailPage.propTypes = {
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
    addCollect: (param) =>{
      dispatch(addCollect(param))
    },
    deleteCollect: (param) =>{
      dispatch(deleteCollect(param))
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({key: 'exerciseDetail', reducer});
const withSaga = injectSaga({key: 'exerciseDetail', saga});

export default compose(
  withReducer,
  withSaga,
  withConnect
)(ExerciseDetailPage);
