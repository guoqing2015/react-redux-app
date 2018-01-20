import React from 'react';
import PropTypes from 'prop-types';
//import {Link} from 'react-router-dom';
import { Link, CacheLink, Control } from 'react-keeper';
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
import SubjectTag from 'components/SubjectTag';

import PageContent from './styles/PageContent';
import List from './styles/List';
import ListItem from './styles/ListItem';
import Title from './styles/Title';
import Empty from './styles/Empty';
import Info from './styles/Info';

import Swipeout from 'rc-swipeout';
import 'rc-swipeout/assets/index.css'; //(web only)


import {queryCollect, addCollect, deleteCollect} from '../../redux/modules/Collect/modules/actions';
import { makeSelectCollectList, makeSelectLoading, makeSelectError } from '../../redux/modules/Collect/modules/selectors';

import {app} from 'setting';

export class CollectPage extends React.PureComponent {
  /**
   *
   */
  constructor(props) {
    super(props);

    this.state = {
      modal: {}
    };

    this.show = this.show.bind(this);
    this.delete = this.delete.bind(this);

  }

  componentDidMount() {
    this.props.queryCollect();
  }

  componentWillReceiveProps(nextProps) {

  }

  /**
   * 查看消息
   **/
  show(item) {
    /*this.setState({
      modal: {
        isOpen: true,
        title: item.messagetitle,
        children: item.messagedesc,
        onConfirm: () => {
          if (item.status == 1) {
            this.props.updateNoticeStatus(item);
          }
        }
      }
    });*/
  }


  /**
   * 查看消息
   **/
  delete(e, subject) {
    e.preventDefault();
    e.stopPropagation();
    this.props.deleteCollect({
      param: {
        method: "02",
        subjectid: subject.subjectid,
        userid: this.props.user.userid,
        username: this.props.user.username,
      },
      subject

    });
  }


  render() {
    const {loading, collectList} = this.props;
    const {modal} = this.state;

    return (
      <div>
        <Helmet>
          <title>我的收藏</title>
          <meta name="description" content="我的收藏"/>
        </Helmet>
        <PageContent>
          {
            collectList && collectList.length > 0 &&
            <List>
              {
                collectList.map((item, index) => (
                  (
                    <ListItem className="border-bottom" key={`item-${index}`} onClick={() => this.show(item)}>
                      <Link to={`/collect-detail/${item.subjectid}`}>
                      {/*<!--1 未读 2 已读 3 删除-->*/}
                      <Swipeout
                        right={[
                          {
                            text: '删除',
                            onPress: (e) => this.delete(e, item),
                            style: {backgroundColor: 'red', color: 'white'},
                            className: ''
                          }
                        ]}
                        onOpen={() => console.log('open')}
                        onClose={() => console.log('close')}
                      >
                        <Info className="clearfix">
                          <FlexBox>
                            <Title>题：
                              {item.subjectname}</Title>
                          </FlexBox>
                          <div className="clearfix">
                            {item.projectname && <SubjectTag>{item.projectname}</SubjectTag>}
                            {item.categoryname && <SubjectTag>{item.categoryname}</SubjectTag>}
                            {item.itemname && <SubjectTag>{item.itemname}</SubjectTag>}
                            {item.subitemname && <SubjectTag>{item.subitemname}</SubjectTag>}
                          </div>
                        </Info>
                      </Swipeout>
                        </Link>
                    </ListItem>
                  )
                ))
              }

            </List>
          }

          {
            collectList && collectList.length === 0 &&
            <Empty>
              <span>暂无收藏记录</span>
            </Empty>
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

CollectPage.propTypes = {
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  collectList: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  loading: PropTypes.bool,
  queryCollect: PropTypes.func,
  addCollect: PropTypes.func,
  deleteCollect: PropTypes.func,
};


const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  collectList: makeSelectCollectList()
});


export function mapDispatchToProps(dispatch) {
  return {
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

export default connect(mapStateToProps, mapDispatchToProps)(CollectPage);


//
// const withReducer = injectReducer({key: 'notice', reducer});
// const withSaga = injectSaga({key: 'notice', saga});
//
// export default compose(
//   withReducer,
//   withSaga,
//   withConnect
// )(CollectPage);
