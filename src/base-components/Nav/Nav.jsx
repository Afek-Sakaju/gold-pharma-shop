import React from 'react';
import PropTypes from 'prop-types';

import { NavContainer, NavLogo, NavChildrenContainer } from './Nav.styled';

export default function Nav({ logoUrl, children }) {
  return (
    <NavContainer>
      <NavLogo src={logoUrl} alt="Logo" />
      {children && <NavChildrenContainer>{children}</NavChildrenContainer>}
    </NavContainer>
  );
}

Nav.propTypes = {
  logoUrl: PropTypes.string,
};

Nav.defaultProps = {
  logoUrl: undefined,
};
