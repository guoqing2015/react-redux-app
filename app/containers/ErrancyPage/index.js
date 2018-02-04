import React from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';
import Waypoint from 'react-waypoint';
import { Link, CacheLink, Control } from 'react-keeper';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import ErrancyList from 'components/ErrancyList';
import ListLoading from 'components/ListLoading';
import ConditionList from 'components/ConditionList';
import Icon from 'components/Icon';

import Condition1 from 'containers/Condition1';
import Condition2 from 'containers/Condition2';

// import subjectTypes from '../../utils/subjectTypes';
import subjectOrders from '../../utils/subjectOrders';


import PageContent from './styles/PageContent';
import Section from './styles/Section';
import NoResult from './styles/NoResult';
import ConditionUl from './styles/ConditionUl';
import ConditionLi from './styles/ConditionLi';
import ConditionLine from './styles/ConditionLine';
import {initList, loadList} from './modules/actions';
import Practice from './styles/Practice';
import {makeSelectList, makeSelectLoading, makeSelectError, makeSelectListCount} from './modules/selectors';
import reducer from './modules/reducer';
import saga from './modules/saga';


export class ErrancyPage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      condition: {
        "userid": props.user.userid,
        answerstatuss: "",  //0:待完成 1:已完成
        "projectcode": "",
        "categorycode": "",
        "itemcode": "",
        "subitemcode": "",
      },
      // selectedType: subjectTypes[0],
      selectedOrder: subjectOrders[0],
    };

    this._loadMoreItems = this._loadMoreItems.bind(this);
    this.loadList = this.loadList.bind(this);
    this.initList = this.initList.bind(this);
    this.onSelectFirstCategory = this.onSelectFirstCategory.bind(this);
    this.onSelectCategory = this.onSelectCategory.bind(this);
    this.onSelectOrder = this.onSelectOrder.bind(this);
  }

  componentDidMount() {
    this.loadList();
  }


  /**
   * 初始化列表 ( 获取第一页的列表)
   */
  initList() {
    // this.props.initList();
    // this.setState((prevState, props) =>
    //   ({
    //     condition: {
    //       ...prevState.condition,
    //       pageindex: 1
    //     }
    //   }), this.loadList)
    this.loadList();
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
    this.setState((prevState, props) =>
      ({
        condition: {
          ...prevState.condition,
          pageindex: prevState.condition.pageindex + 1
        }
      }), this.loadList)
  }


  /**
   * 选择项目
   */
  onSelectFirstCategory(item) {
    this.setState((prevState, props) =>
      ({
        condition: {
          ...prevState.condition,
          projectcode: item.dictcode
        }
      }), this.initList)
  }

  onSelectCategory(param) {
    this.setState((prevState, props) =>
      ({
        condition: {
          ...prevState.condition,
          ...param
        }
      }), this.initList)
  }


  /**
   * 选择排序
   */
  onSelectOrder(item) {
    this.setState({
      selectedOrder: item,
    });

    this.setState((prevState, props) =>
      ({
        condition: {
          ...prevState.condition,
          answerstatuss: item.key
        }
      }), this.initList)
  }


  render() {
    const {loading, error, list, listCount} = this.props;
    const {condition,  selectedOrder} = this.state;
    const pageIndex = condition.pageindex;
    const pagesize = condition.pagesize;
    const totalPageCount = Math.ceil(listCount / pagesize);
    const canLoad = (pageIndex === 0) || (pageIndex < totalPageCount);


    const listProps = {
      loading,
      error,
      list,
    };

    return (
      <div>
        <Helmet>
          <title>错题库</title>
          <meta name="description" content="错题库"/>
        </Helmet>
        <Section>
          <ConditionUl className="border-bottom">
{/*            <ConditionLi>
              <Condition1 onSelect={this.onSelectFirstCategory} />
              <ConditionLine className="border-right"></ConditionLine>
            </ConditionLi>*/}
            <ConditionLi>
              <Condition2 label="分类"  onSelect={this.onSelectCategory} />
              {/*<Condition1 onSelect={this.onSelectFirstCategory} />*/}
              <ConditionLine className="border-right"></ConditionLine>
            </ConditionLi>
            <ConditionLi>
              <ConditionList label="其他" item={selectedOrder} list={subjectOrders} onSelect={this.onSelectOrder}/>
            </ConditionLi>
          </ConditionUl>

          <PageContent>
            { /* 列表 */ }
            <ErrancyList {...listProps} />

            { /* 滚动加载 */ }
            {
              canLoad && !loading && !error &&
              <Waypoint
                onEnter={ this._loadMoreItems }
              />
            }

            { /* loading */ }
            {
              loading &&
              <ListLoading />
            }

            {
              !loading && listCount === 0 &&
              <NoResult>暂无记录</NoResult>
            }
          </PageContent>
         {/* <Practice>
            <Link to="/exercise" />
          </Practice>*/}
        </Section>
      </div>
    );
  }
}

ErrancyPage.propTypes = {
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
    initList: () => {
      dispatch(initList());
    }
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({key: 'errancy', reducer});
const withSaga = injectSaga({key: 'errancy', saga});

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ErrancyPage);
