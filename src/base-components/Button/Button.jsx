import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Button.scss';

export default function Button({
  children,
  className,
  label,
  onClickHandler,
  style,
  type,
}) {
  const classes = classNames('action-button-container', className);

  return (
    <button
      className={classes}
      onClick={(event) => {
        event.stopPropagation();
        onClickHandler?.();
      }}
      style={style}
      // eslint-disable-next-line react/button-has-type
      type={type}
    >
      {label}
      {children}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  onClickHandler: PropTypes.func,
  style: PropTypes.object,
  type: PropTypes.string,
};

Button.defaultProps = {
  className: '',
  label: undefined,
  onClickHandler: undefined,
  style: {},
  type: 'button',
};
