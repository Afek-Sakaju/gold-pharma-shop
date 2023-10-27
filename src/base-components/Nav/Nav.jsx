import React from 'react';
import PropTypes from 'prop-types';

import { IMAGES_ALTS } from '@utils';
import {
  NavContainer,
  NavLogo,
  NavChildrenContainer,
  NavTitle,
} from './Nav.styled';

export default function Nav({
  centerChildren,
  children,
  logoUrl,
  onLogoClick,
  title,
}) {
  return (
    <NavContainer>
      <NavLogo
        alt={IMAGES_ALTS.SHOP_LOGO}
        src={logoUrl}
        onClick={onLogoClick}
        isClickable={onLogoClick}
      />
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
  centerChildren: PropTypes.bool,
  logoUrl: PropTypes.string,
  onLogoClick: PropTypes.func,
  title: PropTypes.string,
};

Nav.defaultProps = {
  onLogoClick: undefined,
  centerChildren: undefined,
  logoUrl: undefined,
  title: undefined,
};
