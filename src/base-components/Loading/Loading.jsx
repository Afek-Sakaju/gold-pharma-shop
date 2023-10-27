import React from 'react';
import { TailSpin } from 'react-loading-icons';

import { TEXT_CONTENT } from '@utils';
import { LoaderContainer } from './Loading.styled';

export default function Loading() {
  return (
    <LoaderContainer>
      <TailSpin stroke="black" speed={0.8} height="10em" width="10em" />
      <h2>{TEXT_CONTENT.LOADER_TEXT}</h2>
    </LoaderContainer>
  );
}
