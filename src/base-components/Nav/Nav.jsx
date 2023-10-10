import React from 'react';
import PropTypes from 'prop-types';

import {
  NavContainer,
  TitleContainer,
  NavChildrenContainer,
} from './Nav.styled';

export default function Nav({ title, headerIcon, children }) {
  return (
    <NavContainer>
      {headerIcon ? (
        <TitleContainer>
          {headerIcon}
          <h1>{title}</h1>
        </TitleContainer>
      ) : (
        <TitleContainer>
          <h1>{title}</h1>
        </TitleContainer>
      )}
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
