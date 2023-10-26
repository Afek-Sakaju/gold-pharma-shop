import React from 'react';

import { ShopEntranceOptions } from '@components';
import { Nav } from '@base-components';
import { LOGO_SRC } from '@utils';
import { PageContainer } from './HomePage.styled';

export default function StoreHomePage() {
  return (
    <PageContainer>
      <Nav logoUrl={LOGO_SRC} />
      <ShopEntranceOptions />
    </PageContainer>
  );
}
