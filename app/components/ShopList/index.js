import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './styles/Wrapper';
import Ul from './styles/Ul';

import ShopListItem from '../ShopListItem';

function ShopList({ loading, error, shops }) {
  // if (loading) {
  //   return <List component={ListLoading} />;
  // }

  if (error !== false) {
    return (<div>网络异常</div>);
  }

  if (shops !== false) {
    // return <List items={shops} component={ShopListItem} />;
    return (<Wrapper>
      <Ul>
        {
          shops.map((item, index) => (
            (<ShopListItem key={`item-${index}`} item={item} />)
          ))
        }
      </Ul>
    </Wrapper>);
  }

  return null;
}

ShopList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  shops: PropTypes.any,
};

export default ShopList;
