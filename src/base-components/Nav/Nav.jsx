import React from 'react';
import PropTypes from 'prop-types';

import { IMAGES_ALTS } from '@utils';
import {
  NavContainer,
  NavLogo,
  NavChildrenContainer,
  NavTitle,
  AdminIcon,
} from './Nav.styled';

export default function Nav({
  centerChildren,
  children,
  logoUrl,
  onLogoClick,
  shouldAddAdminIcon,
  title,
	...props
}) {
  const shouldAddChildrenContainer = children || shouldAddAdminIcon;
  const adminIcon = <AdminIcon />;

  return (
    <NavContainer {...props}>
      <NavLogo
        alt={IMAGES_ALTS.SHOP_LOGO}
        src={logoUrl}
        onClick={onLogoClick}
        isClickable={onLogoClick}
      />
      <NavTitle>{title}</NavTitle>
      {shouldAddChildrenContainer && (
        <NavChildrenContainer centerChildren={centerChildren}>
          {children || (shouldAddAdminIcon && adminIcon)}
        </NavChildrenContainer>
      )}
    </NavContainer>
  );
}

Nav.propTypes = {
  centerChildren: PropTypes.bool,
  logoUrl: PropTypes.string,
  onLogoClick: PropTypes.func,
  shouldAddAdminIcon: PropTypes.bool,
  title: PropTypes.string,
};

Nav.defaultProps = {
  onLogoClick: undefined,
  centerChildren: undefined,
  logoUrl: undefined,
  shouldAddAdminIcon: undefined,
  title: undefined,
};
