import React from 'react';
import { PiStorefrontBold as StoreIcon } from 'react-icons/pi';

import { CartConnected, ProductList } from '@components';
import { Header } from '@base-components';

export default function StoreHomePage() {
  return (
    <div>
      <Header
        title="Prime choice grocery store"
        headerIcon={<StoreIcon size={50} />}
      >
        <CartConnected />
      </Header>
      <ProductList />
    </div>
  );
}
