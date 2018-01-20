/**
 * ShopListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import PropTypes from 'prop-types';
import ShopItem from './styles/ShopItem';
import ShopBaseInfo from './styles/ShopBaseInfo';
import ShopName from './styles/ShopName';
import ShopImgWrapper from './styles/ShopImgWrapper';
import ShopImg from './styles/ShopImg';
import ShopInfoMore from './styles/ShopInfoMore';
import ShopInfoLabel from './styles/ShopInfoLabel';

import addImgPrefix from '../../utils/addImgPrefix';


export class ShopListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const item = this.props.item;
    return (
      <ShopItem to={`/shop-detail/${item.id}`} key={`repo-list-item-${item.id}`} >
        <ShopBaseInfo>
          <ShopName>{item.name}</ShopName>
        </ShopBaseInfo>
        <ShopImgWrapper>
          <ShopImg src={addImgPrefix(item.logo_url)} />
        </ShopImgWrapper>
        {
          (item.activity_info || item.extend_info.is_queue === 1 || item.extend_info.is_reserve === 1) &&
          <ShopInfoMore>
            {
              item.activity_info && <ShopInfoLabel>惠</ShopInfoLabel>
            }
            {
              item.extend_info.is_queue === 1 && <ShopInfoLabel>排</ShopInfoLabel>
            }
            {
              item.extend_info.is_reserve && <ShopInfoLabel>订</ShopInfoLabel>
            }
          </ShopInfoMore>
        }
      </ShopItem>
    );
  }
}

ShopListItem.propTypes = {
  item: PropTypes.object,
};

export default ShopListItem;
