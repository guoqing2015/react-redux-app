import React from 'react';
import PropTypes from 'prop-types';
import { TriangleDown, TriangleUp } from './styles/Triangle';

function IconTriangle(props) {
  let content = '';
  if (props.direction) {
    content = <TriangleUp checked={props.checked} />;
  } else {
    content = <TriangleDown checked={props.checked} />;
  }
  return (
    content
  );
}

IconTriangle.propTypes = {
  checked: PropTypes.bool,
  direction: PropTypes.bool,
};


export default IconTriangle;
