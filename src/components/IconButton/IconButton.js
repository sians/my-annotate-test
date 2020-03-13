import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function IconButton({ action, visible, type, faIcon }) {

  const events = {
    action
  };

  return (
    <a onClick={action} className="icon-button">
        <FontAwesomeIcon className="icon" icon={faIcon}/>
    </a>
  );
}

export default IconButton;

IconButton.propTypes = {
    faIcon: PropTypes.element,
    visible: PropTypes.bool,
    type: PropTypes.string.isRequired,
    action: PropTypes.func
}

IconButton.defaultProps = {
    visible: true,
}