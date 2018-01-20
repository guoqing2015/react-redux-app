/**
*
* LocaleToggle
*
*/

import React from 'react';
import PropTypes from 'prop-types';


function Toggle(props) {

  const {value, onToggle, name, values, ...extraProps} = props;
  console.log(value, values);

  return (
    <select value={value} onChange={onToggle} name={name} {...extraProps}>
      {
        values.map((v) => (
          <option key={v.value} value={v.value}>{v.text}</option>
        ))
      }
    </select>
  );
}

Toggle.propTypes = {
  onToggle: PropTypes.func,
  values: PropTypes.array,
  value: PropTypes.any,
  name: PropTypes.string,
  //messages: PropTypes.object,
};

export default Toggle;
