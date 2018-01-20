import React from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {Map} from 'immutable';
import {createStructuredSelector} from 'reselect';
import cx from 'classnames';
import {urls} from 'setting';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import {ToastContainer, toast} from 'components/Toast';
import Loader from 'components/Loader';
import Modal from 'components/Modal';
import {FlexBox, FlexBoxAlignCenter, Flex} from 'components/FlexLayout';

import PageContent from './styles/PageContent';
import NoticeList from './styles/NoticeList';
import NoticeListItem from './styles/NoticeListItem';
import NoticeTitle from './styles/NoticeTitle';
import NoticeContent from './styles/NoticeContent';
import NoticeTime from './styles/NoticeTime';
import NoticeEmpty from './styles/NoticeEmpty';
import NoticeEmptyPic from './styles/NoticeEmptyPic';
import NoticeInfo from './styles/NoticeInfo';

import Swipeout from 'rc-swipeout';
import 'rc-swipeout/assets/index.css'; //(web only)


import {getNoticeList, updateNoticeStatus, deleteNoticeStatus} from './modules/actions';
import {makeSelectNotices, makeSelectLoading, makeSelectError, makeSelectHasUnread} from './modules/selectors';
import reducer from './modules/reducer';
import saga from './modules/saga';

import {app} from 'setting';

export class NoticePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   *
   */
  constructor(props) {
    super(props);

    this.state = {
      modal: {}
    };

    this.showNotice = this.showNotice.bind(this);
    this.deleteNotice = this.deleteNotice.bind(this);

  }

  componentDidMount() {
    this.props.getNoticeList({
      "userid": this.props.user.userid,
      "statuss": "0,1" //0:未读 1:已读 -1:已删除
    });
  }

  componentWillReceiveProps(nextProps) {

  }

  /**
   * 查看消息
   **/
  showNotice(notice) {

    this.setState({
      modal: {
        isOpen: true,
        title: notice.title,
        children: notice.content,
        onConfirm: () => {
          if (notice.status == 0) {
            this.props.updateNoticeStatus(notice);
          }
        }
      }
    });
  }


  /**
   * 查看消息
   **/
  deleteNotice(e, notice) {
    e.preventDefault();
    e.stopPropagation();
    this.props.deleteNoticeStatus(notice);
  }


  render() {
    const {loading, notices} = this.props;
    const {modal} = this.state;

    return (
      <div>
        <Helmet>
          <title>消息中心</title>
          <meta name="description" content="消息中心"/>
        </Helmet>
        <PageContent>
          {
            notices && notices.length > 0 &&
            <NoticeList>
              {
                notices.map((item, index) => (
                  (
                    <NoticeListItem className={cx({'unread': item.status == 0, 'read': item.status == 1})}
                                    key={`item-${index}`} onClick={() => this.showNotice(item)}>
                      {/*<!--1 未读 2 已读 3 删除-->*/}
                      <Swipeout
                        right={[
                          {
                            text: '删除',
                            onPress: (e) => this.deleteNotice(e, item),
                            style: {backgroundColor: 'red', color: 'white'},
                            className: ''
                          }
                        ]}
                        onOpen={() => console.log('open')}
                        onClose={() => console.log('close')}
                      >
                        <NoticeInfo className="clearfix">
                          <FlexBox>
                            <NoticeTitle>
                              {item.title}</NoticeTitle>
                          </FlexBox>
                          <NoticeContent>{item.content}</NoticeContent>
                          <NoticeTime>{item.createtime}</NoticeTime>
                        </NoticeInfo>
                      </Swipeout>
                    </NoticeListItem>
                  )
                ))
              }

            </NoticeList>
          }

          {
            notices && notices.length === 0 &&
            <NoticeEmpty>
              <NoticeEmptyPic />
              <span>您暂无消息</span>
            </NoticeEmpty>
          }


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

NoticePage.propTypes = {
  getNoticeList: PropTypes.func,
  updateNoticeStatus: PropTypes.func,
  deleteNoticeStatus: PropTypes.func,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  loading: PropTypes.bool,
  notices: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  hasUnread: PropTypes.bool,
};


const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  notices: makeSelectNotices(),
  hasUnread: makeSelectHasUnread()
});


export function mapDispatchToProps(dispatch) {
  return {
    getNoticeList: (param) => {
      dispatch(getNoticeList(param));
    },
    updateNoticeStatus: (notice) => {
      dispatch(updateNoticeStatus(notice))
    },
    deleteNoticeStatus: (notice) => {
      dispatch(deleteNoticeStatus(notice))
    }
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({key: 'notice', reducer});
const withSaga = injectSaga({key: 'notice', saga});

export default compose(
  withReducer,
  withSaga,
  withConnect
)(NoticePage);
