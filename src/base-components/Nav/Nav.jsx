import React from 'react';
import PropTypes from 'prop-types';

import { IMAGES_ALTS } from '@utils';
import { NavContainer, NavLogo, NavChildrenContainer } from './Nav.styled';

export default function Nav({ logoUrl, children }) {
  return (
    <NavContainer>
      <NavLogo alt={IMAGES_ALTS.SHOP_LOGO} src={logoUrl} />
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
