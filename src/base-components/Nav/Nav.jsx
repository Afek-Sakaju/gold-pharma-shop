import React from 'react';
import PropTypes from 'prop-types';

import './Nav.scss';

export default function Nav({ title, headerIcon, children }) {
  return (
    <div className="header-container">
      {headerIcon ? (
        <div className="title-container">
          {headerIcon}
          <h1 className="title">{title} </h1>
        </div>
      ) : (
        <div className="title-container">
          <h1 className="title">{title} </h1>
        </div>
      )}
      {children ? (
        <div className="header-children-container">{children}</div>
      ) : null}
    </div>
  );
}

Nav.propTypes = {
  title: PropTypes.string,
  headerIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};

Nav.defaultProps = {
  title: undefined,
  headerIcon: undefined,
};
