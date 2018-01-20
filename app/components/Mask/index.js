import React from 'react';
import PropTypes from 'prop-types';
import UiMask from './styles/UiMask';

function Mask(props) {
  return (
    <UiMask {...props} />
  );
}

Mask.propTypes = {
  isShow: PropTypes.bool,
};


export default Mask;
