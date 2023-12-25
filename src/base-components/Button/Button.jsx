import React from 'react';
import PropTypes from 'prop-types';

import { StyledButton } from './Button.styled';

export default function Button({
  children,
  className,
  label,
  onClick,
  style,
  type,
  ...props
}) {
  return (
    <StyledButton
      className={className}
      onClick={(event) => {
        event.stopPropagation();
        onClick?.();
      }}
      style={style}
      type={type}
      {...props}
    >
      {label}
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object,
  type: PropTypes.string,
};

Button.defaultProps = {
  className: '',
  label: undefined,
  onClick: undefined,
  style: {},
  type: 'button',
};
