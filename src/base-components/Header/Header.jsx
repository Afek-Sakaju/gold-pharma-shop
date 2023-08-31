import React from 'react';
import PropTypes from 'prop-types';

import './Header.scss';
import Title from '../Title/Title';

export default function Header({ title, headerIcon, children }) {
  return (
    <div className="header-container">
      {headerIcon ? (
        <div className="title-container">
          {headerIcon}
          <Title title={title} />
        </div>
      ) : (
        <div className="title-container">
          <Title title={title} />
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
