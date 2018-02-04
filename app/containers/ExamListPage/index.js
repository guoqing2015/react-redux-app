import React from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';
// import Waypoint from 'react-waypoint';
import PubSub from 'pubsub-js';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import ExamList from 'components/ExamList';
import ListLoading from 'components/ListLoading';
import Icon from 'components/Icon';



import PageContent from './styles/PageContent';
import Section from './styles/Section';
// import NoMore from './styles/NoMore';
import NoResult from './styles/NoResult';
import {initList, loadList} from './modules/actions';
import {makeSelectList, makeSelectLoading, makeSelectError, makeSelectListCount} from './modules/selectors';
import reducer from './modules/reducer';
import saga from './modules/saga';

export class ExamListPage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      condition: {
        "answerstatus": "01", //01:待完成 02:已完成 03:未完成
        "userid": props.user.userid,
        //"userid": "",
        "projectcode": "",
        "categorycode": "",
        "itemcode": "",
        "subitemcode": ""
        //pageindex: 1,
        //pagesize: 10
      },
      tabIndex: 0,
    };

    this._loadMoreItems = this._loadMoreItems.bind(this);
    this.loadList = this.loadList.bind(this);
    this.initList = this.initList.bind(this);
  }

  componentDidMount() {
    this._loadMoreItems();
      PubSub.subscribe('EXAM_LIST_REFRESH', (event, data) => {
        this._loadMoreItems();
      });
  }

  componentWillUnmount() {
    PubSub.unsubscribe('EXAM_LIST_REFRESH');
  }

  /**
   * 初始化列表 ( 获取第一页的列表)
   */
  initList(tabIndex) {
    this.props.initList();
    this.setState((prevState, props) =>
      ({
        condition: {
          ...prevState.condition,
          //pageindex: 1,
          answerstatus: '0' + (tabIndex + 1)
        },
        tabIndex
      }), this.loadList)
  }

  /**
   * 获取列表
   */
  loadList() {
    this.props.initList();
    this.props.loadList(this.state.condition);
  }


  /**
   * 加载更多
   */
  _loadMoreItems() {
    const {tabIndex} = this.state;

    this.setState((prevState, props) =>
      ({
        condition: {
          ...prevState.condition,
          //pageindex: prevState.condition.pageindex + 1,
          answerstatus: '0' + (tabIndex + 1)
        }
      }), this.loadList)
  }




  render() {
    const {loading, error, list, listCount} = this.props;
    const {condition, tabIndex} = this.state;
    // 暂无分页
    //const pageIndex = condition.pageindex;
    //const pagesize = condition.pagesize;
    //const totalPageCount = Math.ceil(listCount / pagesize);
    //const canLoad = (pageIndex === 0) || (pageIndex < totalPageCount);



    const listProps = {
      loading,
      error,
      list,
      tabIndex
    };

    return (
      <div>
        <Helmet>
          <title>测试</title>
          <meta name="description" content="测试"/>
        </Helmet>
        <Section>
          <Tabs defaultIndex={tabIndex}  onSelect={index => this.initList(index)}>
            <TabList>
              <Tab>待完成</Tab>
              <Tab>已完成</Tab>
              <Tab>已过期</Tab>
            </TabList>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
          </Tabs>


          <PageContent>
            { /* 列表 */ }
            <ExamList {...listProps} />

            { /* 滚动加载 */ }
            {
              /*
              canLoad && !loading && !error &&
              <Waypoint
                onEnter={ this._loadMoreItems }
              />
              */
            }

            { /* loading */ }
            {
              loading && <ListLoading />
            }

            {/* no more */}
            {
              /*
              !loading && !canLoad && pageIndex >= 1 && totalPageCount >= 1 &&
              <NoMore>没有更多结果了</NoMore>
              */
            }


            {/* 暂无练习记录 */}
            {
              !loading && listCount == 0 && !error && /*&& !canLoad && pageIndex === 1 && totalPageCount === 0*/
              <NoResult>暂无数据</NoResult>
            }

            {
              error &&
              <NoResult>网络异常</NoResult>
            }


          </PageContent>
        </Section>
      </div>
    );
  }
}

ExamListPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  list: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  listCount: PropTypes.number,
  loadList: PropTypes.func,
  initList: PropTypes.func,
};


const mapStateToProps = createStructuredSelector({
  list: makeSelectList(),
  listCount: makeSelectListCount(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});


export function mapDispatchToProps(dispatch) {
  return {
    loadList: (param) => {
      dispatch(loadList(param));
    },
    initList: (tabIndex) => {
      dispatch(initList(tabIndex));
    }
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({key: 'examList', reducer});
const withSaga = injectSaga({key: 'examList', saga});

export default compose(
  withReducer,
  withSaga,
  withConnect
)(ExamListPage);
