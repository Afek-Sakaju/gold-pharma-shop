import React from 'react';

import { ShoppingCartConnected, ProductList } from '@components';
import { Nav } from '@base-components';
import { LOGO_SRC } from '@utils';

export default function StoreHomePage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Nav logoUrl={LOGO_SRC}>
        <ShoppingCartConnected />
      </Nav>
      <ProductList />
    </div>
  );
}
