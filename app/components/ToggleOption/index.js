/**
*
* ToggleOption
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import { injectIntl, intlShape } from 'react-intl';

const ToggleOption = ({ value, message }) => (
  <option value={value}>
    {/*{message ? intl.formatMessage(message) : value}*/}
    {message}
  </option>
);

ToggleOption.propTypes = {
  value: PropTypes.string.isRequired,
  message: PropTypes.object,
  // intl: intlShape.isRequired,
};

// export default injectIntl(ToggleOption);
export default ToggleOption;
