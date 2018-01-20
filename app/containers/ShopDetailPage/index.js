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

export class ShopDetailPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   *
   */
  constructor(props) {
    super(props);

    // this.state = {
    //   condition: fromJS({  // Note: 使用 Immutable.fromJS() 去创建 Map, 因为 Map() 函数不会将深嵌套的对象转成Map
    //     condition_name: '',
    //     industry_id: null,
    //     sort_name: 'name',
    //     sort_type: 'asc',
    //     floor_no: null,
    //     cust_id: null,
    //     page: { page_index: 0, page_count: 5 },
    //   }),
    //   selectedFloor: floors[0],
    //   selectedOrder: orders[0],
    //   selectedShopType: props.shopTypes[0],
    // };
    //
    // this._loadMoreItems = this._loadMoreItems.bind(this);
    // this.getShops = this.getShops.bind(this);
    // this.initShops = this.initShops.bind(this);
    // this.onSelectFloor = this.onSelectFloor.bind(this);
    // this.onSelectOrder = this.onSelectOrder.bind(this);
    // this.onSelectShopType = this.onSelectShopType.bind(this);
  }

  componentDidMount() {
    // this.props.getShopTypes();
  }


  render() {
    // const { loading, error, shops, shopsCount, shopTypes } = this.props;
    // const { condition, selectedFloor, selectedOrder, selectedShopType } = this.state;
    // const pageIndex = condition.getIn(['page', 'page_index']);
    // const pageCount = condition.getIn(['page', 'page_count']);
    // const totalPageCount = Math.ceil(shopsCount / pageCount);
    // const canLoad = (pageIndex === 0) || (pageIndex < totalPageCount);
    //
    //
    // const shopListProps = {
    //   loading,
    //   error,
    //   shops,
    // };

    return (
      <div>
        <Helmet>
          <title>品牌介绍</title>
          <meta name="description" content="品牌介绍" />
        </Helmet>
        <Section>
          品牌介绍
        </Section>
      </div>
    );
  }
}

ShopDetailPage.propTypes = {
  // loading: PropTypes.bool,
  // error: PropTypes.oneOfType([
  //   PropTypes.object,
  //   PropTypes.bool,
  // ]),
  // shops: PropTypes.oneOfType([
  //   PropTypes.array,
  //   PropTypes.bool,
  // ]),
  // shopTypes: PropTypes.array,
  // shopsCount: PropTypes.number,
  // getShopList: PropTypes.func,
  // initShopList: PropTypes.func,
  // getShopTypes: PropTypes.func,
};


const mapStateToProps = createStructuredSelector({
  // shops: makeSelectShops(),
  // shopsCount: makeSelectShopsCount(),
  // loading: makeSelectLoading(),
  // error: makeSelectError(),
  // shopTypes: makeSelectShopTypes(),
});


export function mapDispatchToProps(dispatch) {
  return {
    // getShopList: (param) => {
    //   dispatch(loadShopList(param));
    // },
    // initShopList: () => {
    //   dispatch(initShopList());
    // },
    // getShopTypes: () => {
    //   dispatch(loadShopTypes());
    // },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'shopDetail', reducer });
const withSaga = injectSaga({ key: 'shopDetail', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ShopDetailPage);
