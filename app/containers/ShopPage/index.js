import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { fromJS } from 'immutable';
import { createStructuredSelector } from 'reselect';
import Waypoint from 'react-waypoint';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import ShopList from 'components/ShopList';
import ListLoading from 'components/ListLoading';
import ConditionList from 'components/ConditionList';

import { floors } from './floors';
import { orders } from './orders';
import shopTypesFilter from './shopTypesFilter';


import PageContent from './styles/PageContent';
import Section from './styles/Section';
import NoMore from './styles/NoMore';
import NoResult from './styles/NoResult';
import ConditionUl from './styles/ConditionUl';
import ConditionLi from './styles/ConditionLi';
import ConditionLine from './styles/ConditionLine';
import { initShopList, loadShopList, loadShopTypes } from './modules/actions';
import { makeSelectShops, makeSelectLoading, makeSelectError, makeSelectShopsCount, makeSelectShopTypes } from './modules/selectors';
import reducer from './modules/reducer';
import saga from './modules/saga';

export class ShopPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   *
   */
  constructor(props) {
    super(props);

    this.state = {
      condition: fromJS({  // Note: 使用 Immutable.fromJS() 去创建 Map, 因为 Map() 函数不会将深嵌套的对象转成Map
        condition_name: '',
        industry_id: null,
        sort_name: 'name',
        sort_type: 'asc',
        floor_no: null,
        cust_id: null,
        page: { page_index: 0, page_count: 5 },
      }),
      selectedFloor: floors[0],
      selectedOrder: orders[0],
      selectedShopType: props.shopTypes[0],
    };

    this._loadMoreItems = this._loadMoreItems.bind(this);
    this.getShops = this.getShops.bind(this);
    this.initShops = this.initShops.bind(this);
    this.onSelectFloor = this.onSelectFloor.bind(this);
    this.onSelectOrder = this.onSelectOrder.bind(this);
    this.onSelectShopType = this.onSelectShopType.bind(this);
  }

  componentDidMount() {
    this.props.getShopTypes();
  }


  /**
   * 初始化店铺列表 ( 获取第一页的店铺)
   */
  initShops() {
    this.props.initShopList();
    this.setState(
      ({ condition }) => (
        {
          condition: condition.updateIn(['page', 'page_index'], () => (1)),
        }
      ),
      this.getShops
    );
    // this.getShops();
  }

  /**
   * 获取店铺列表
   */
  getShops() {
    this.props.getShopList(this.state.condition);
  }


  /**
   * 加载更多商铺
   */
  _loadMoreItems() {
    this.setState(
      ({ condition }) => (
        {
          condition: condition.updateIn(['page', 'page_index'], (v) => (v + 1)), // 新的 Map 对象
        }
      ),
      this.getShops
    );
  }


  /**
   * 选择楼层
   */
  onSelectFloor(item) {
    this.setState({
      selectedFloor: item,
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
      this.initShops
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
      this.initShops
    );
  }


  render() {
    const { loading, error, shops, shopsCount, shopTypes } = this.props;
    const { condition, selectedFloor, selectedOrder, selectedShopType } = this.state;
    const pageIndex = condition.getIn(['page', 'page_index']);
    const pageCount = condition.getIn(['page', 'page_count']);
    const totalPageCount = Math.ceil(shopsCount / pageCount);
    const canLoad = (pageIndex === 0) || (pageIndex < totalPageCount);


    const shopListProps = {
      loading,
      error,
      shops,
    };

    return (
      <div>
        <Helmet>
          <title>品牌导览</title>
          <meta name="description" content="品牌导览" />
        </Helmet>
          <Section>
            <ConditionUl className="border-bottom">
              <ConditionLi>
                <ConditionList label="楼层" item={selectedFloor} list={floors} onSelect={this.onSelectFloor} />
                <ConditionLine className="border-right"></ConditionLine>
              </ConditionLi>
              <ConditionLi>
                <ConditionList label="类型" item={selectedShopType} list={shopTypesFilter(shopTypes)} onSelect={this.onSelectShopType} />
                <ConditionLine className="border-right"></ConditionLine>
              </ConditionLi>
              <ConditionLi>
                <ConditionList label="排序" item={selectedOrder} list={orders} onSelect={this.onSelectOrder} />
              </ConditionLi>
            </ConditionUl>


            <PageContent>
              { /* 商户列表 */ }
              <ShopList {...shopListProps} />

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

              {/* no more */}
              {
                !loading && !canLoad && pageIndex >= 1 && totalPageCount >= 1 &&
                  <NoMore>没有更多结果了</NoMore>
              }

              {/* 暂无商铺 */}
              {
                !loading && !canLoad && pageIndex === 1 && totalPageCount === 0 &&
                <NoResult>暂无商铺</NoResult>
              }
            </PageContent>
          </Section>
      </div>
    );
  }
}

ShopPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  shops: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  shopTypes: PropTypes.array,
  shopsCount: PropTypes.number,
  getShopList: PropTypes.func,
  initShopList: PropTypes.func,
  getShopTypes: PropTypes.func,
  // username: PropTypes.string,
  // onChangeUsername: PropTypes.func,
};


const mapStateToProps = createStructuredSelector({
  shops: makeSelectShops(),
  shopsCount: makeSelectShopsCount(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  shopTypes: makeSelectShopTypes(),
});


export function mapDispatchToProps(dispatch) {
  return {
    // onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    getShopList: (param) => {
      // if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadShopList(param));
    },
    initShopList: () => {
      dispatch(initShopList());
    },
    getShopTypes: () => {
      dispatch(loadShopTypes());
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'shop', reducer });
const withSaga = injectSaga({ key: 'shop', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ShopPage);
