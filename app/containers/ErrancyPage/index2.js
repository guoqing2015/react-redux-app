import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { fromJS } from 'immutable';
import { createStructuredSelector } from 'reselect';
import Waypoint from 'react-waypoint';
//import {Link} from 'react-router-dom';
import { Link, CacheLink, Control } from 'react-keeper';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import ErrancyList from 'components/ErrancyList';
import ListLoading from 'components/ListLoading';
import ConditionList from 'components/ConditionList';
import ConditionFilter from 'components/ConditionFilter';
import Icon from 'components/Icon';

import errancyTypes from '../../utils/subjectTypes';
import errancyOrders from '../../utils/subjectOrders';
//import shopTypesFilter from '../../utils/shopTypesFilter';

import PageContent from './styles/PageContent';
import Section from './styles/Section';
import NoMore from './styles/NoMore';
import NoResult from './styles/NoResult';
import ConditionUl from './styles/ConditionUl';
import ConditionLi from './styles/ConditionLi';
import ConditionLine from './styles/ConditionLine';
import Practice from './styles/Practice';
import {initList, loadList} from './modules/actions';
import {makeSelectList, makeSelectLoading, makeSelectError, makeSelectListCount} from './modules/selectors';
import reducer from './modules/reducer';
import saga from './modules/saga';

export class ErrancyPage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      condition: {
        "userid": props.user.userid,
        "projectcode": "",
        "categorycode": "",
        "itemcode": "",
        "subitemcode": ""
      },
      tabIndex: 0,
    };

    this._loadMoreItems = this._loadMoreItems.bind(this);
    this.loadList = this.loadList.bind(this);
    this.initList = this.initList.bind(this);
  }

  componentDidMount() {
    this._loadMoreItems();
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
          //answerstatus: '0' + (tabIndex + 1)
        },
        tabIndex
      }), this.loadList)
  }

  /**
   * 获取列表
   */
  loadList() {
    this.props.initList();
    //this.state.condition;
    //debugger;
    console.log(JSON.stringify(this.state.condition));
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
          //answerstatus: '0' + (tabIndex + 1)
        }
      }), this.loadList)
  }




  /**
   * 选择楼层
   */
  onSelectType(item) {
    this.setState({
      selectedType: item,
    });

    this.setState(
      ({ condition }) => (
        {
          condition: condition.updateIn(['floor_no'], () => (item.key)),
        }
      ),
      this.initShops
    );
  }

  /**
   * 选择排序
   */
  onSelectOrder(item) {
    this.setState({
      selectedOrder: item,
    });

    this.setState(
      ({ condition }) => (
        {
          condition: condition.updateIn(['sort_name'], () => (item.key)),
        }
      ),
      this.loadList
    );
  }

  /**
   * 选择类别
   */
  onSelectShopType(item) {
    this.setState({
      selectedShopType: item,
    });

    const industryId = item.key == null ? null : parseInt(item.key);

    this.setState(
      ({ condition }) => (
        {
          condition: condition.updateIn(['industry_id'], () => (industryId)),
        }
      ),
      this.loadList
    );
  }


  render() {
    const { loading, error, list, listCount } = this.props;
    const { condition, selectedType, selectedOrder, selectedShopType } = this.state;
    //const pageIndex = condition.getIn(['page', 'page_index']);
    //const pageCount = condition.getIn(['page', 'page_count']);
    //const totalPageCount = Math.ceil(shopsCount / pageCount);
    //const canLoad = (pageIndex === 0) || (pageIndex < totalPageCount);


    const listProps = {
      loading,
      error,
      errancys: list,
    };

    return (
      <div>
        <Helmet>
          <title>错题库</title>
          <meta name="description" content="错题库" />
        </Helmet>
          <Section>
            <ConditionUl className="border-bottom">
              <ConditionLi>
                {/*<ConditionList label="全部类型" item={selectedType} list={errancyTypes} onSelect={this.onSelectType} />*/}
                <ConditionLine className="border-right"></ConditionLine>
              </ConditionLi>
              <ConditionLi>
                {/*<ConditionFilter label="条件筛选"  onSelect={this.onSelectShopType} />*/}
                <ConditionLine className="border-right"></ConditionLine>
              </ConditionLi>
              <ConditionLi>
                {/*<ConditionList label="智能排序" item={selectedOrder} list={errancyOrders} onSelect={this.onSelectOrder} />*/}
              </ConditionLi>
            </ConditionUl>


            <PageContent>
              { /* 商户列表 */ }
              <ErrancyList {...listProps} />

              { /* 滚动加载 */ }
              {/*
                canLoad && !loading && !error &&
                <Waypoint
                  onEnter={ this._loadMoreItems }
                />
              */}


              { /* loading */ }
              {
                loading &&
                <ListLoading />
              }

              {/* no more */}
              {/*
                !loading && !canLoad && pageIndex >= 1 && totalPageCount >= 1 &&
                  <NoMore>没有更多结果了</NoMore>
              */}

              {/* 暂无错题库 */}
              {
                !loading && listCount == 0 && !error &&
                <NoResult>暂无错题库</NoResult>
              }

              {
                error &&
                <NoResult>网络异常</NoResult>
              }
            </PageContent>
            <Practice>
              <Link to="/exercise" />
            </Practice>
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
    initList: (tabIndex) => {
      dispatch(initList(tabIndex));
    }
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'errancy', reducer });
const withSaga = injectSaga({ key: 'errancy', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(ErrancyPage);
