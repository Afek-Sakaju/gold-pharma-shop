import React from 'react';

import { TEXT_CONTENT } from '@utils';
import { LoaderContainer, LoaderTitle, AnimatedLoader } from './Loader.styled';

export default function Loader() {
  return (
    <LoaderContainer>
      <AnimatedLoader size={150} color="#faa321d5" speedMultiplier={0.8} />
      <LoaderTitle>{TEXT_CONTENT.LOADER_TEXT}</LoaderTitle>
    </LoaderContainer>
  );
}
