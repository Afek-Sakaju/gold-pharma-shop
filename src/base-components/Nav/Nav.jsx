import React from 'react';
import PropTypes from 'prop-types';

import { IMAGES_ALTS } from '@utils';
import {
  NavContainer,
  NavLogo,
  NavChildrenContainer,
  NavTitle,
} from './Nav.styled';

export default function Nav({ logoUrl, title, centerChildren, children }) {
  return (
    <NavContainer>
      <NavLogo alt={IMAGES_ALTS.SHOP_LOGO} src={logoUrl} />
      <NavTitle>{title}</NavTitle>
      {children && (
        <NavChildrenContainer centerChildren={centerChildren}>
          {children}
        </NavChildrenContainer>
      )}
    </NavContainer>
  );
}

Nav.propTypes = {
  logoUrl: PropTypes.string,
  title: PropTypes.string,
  centerChildren: PropTypes.bool,
};

Nav.defaultProps = {
  logoUrl: undefined,
  title: undefined,
  centerChildren: undefined,
};
