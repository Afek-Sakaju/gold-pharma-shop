/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

import {
  NavContainer,
  TitleContainer,
  ShopLogo,
  NavChildrenContainer,
} from './Nav.styled';

export default function Nav({ title, headerIcon, children }) {
  return (
    <NavContainer>
      <ShopLogo src="/Afek-Sakaju/grocery-store/shop-logo.png" alt="Logo" />
      {children ? (
        <NavChildrenContainer>{children}</NavChildrenContainer>
      ) : null}
    </NavContainer>
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
