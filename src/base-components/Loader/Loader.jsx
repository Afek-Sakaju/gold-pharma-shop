import React from 'react';
import PropTypes from 'prop-types';

import { TEXT_CONTENT } from '@utils';
import { LoaderContainer, LoaderTitle, AnimatedLoader } from './Loader.styled';

export default function Loader({ loaderColor, titleColor, ...props }) {
  return (
    <LoaderContainer>
      <AnimatedLoader
        size={150}
        color={loaderColor}
        speedMultiplier={1.6}
        {...props}
      />
      <LoaderTitle>{TEXT_CONTENT.LOADER_TEXT}</LoaderTitle>
    </LoaderContainer>
  );
}

Loader.propTypes = {
  loaderColor: PropTypes.string,
  loaderSize: PropTypes.number,
  titleColor: PropTypes.string,
};

Loader.defaultProps = {
  loaderColor: undefined,
  loaderSize: PropTypes.number,
  titleColor: undefined,
};
