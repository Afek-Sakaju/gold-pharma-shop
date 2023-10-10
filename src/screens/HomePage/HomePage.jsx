import React from 'react';
import { PiStorefrontBold as StoreIcon } from 'react-icons/pi';

import { ShoppingCartConnected, ProductList } from '@components';
import { Nav } from '@base-components';

export default function StoreHomePage() {
  return (
    <div>
      <Nav
        title="Prime choice grocery store"
        headerIcon={<StoreIcon size={50} />}
      >
        <ShoppingCartConnected />
      </Nav>
      <ProductList />
    </div>
  );
}
