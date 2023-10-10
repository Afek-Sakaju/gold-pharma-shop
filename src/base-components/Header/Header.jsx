import React from 'react';
import PropTypes from 'prop-types';

import './Header.scss';

export default function Header({ title, headerIcon, children }) {
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

Header.propTypes = {
  title: PropTypes.string,
  headerIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};

Header.defaultProps = {
  title: undefined,
  headerIcon: undefined,
};
