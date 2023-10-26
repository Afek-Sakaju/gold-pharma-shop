import React from 'react';

import { ShoppingCartConnected, ProductList } from '@components';
import { Nav } from '@base-components';
import { LOGO_SRC } from '@utils';
import { PageContainer } from './ProductsListPage.styled';

export default function ProductsListPage() {
  return (
    <PageContainer>
      <Nav logoUrl={LOGO_SRC}>
        <ShoppingCartConnected />
      </Nav>
      <ProductList />
    </PageContainer>
  );
}
