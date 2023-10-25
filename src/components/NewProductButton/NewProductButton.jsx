import React from 'react';
import { useNavigate } from 'react-router-dom';

import { NAV_PATHS } from '@utils';
import { Product } from '@base-components';

export default function NewProductButton() {
  const navigate = useNavigate();

  return (
    <Product
      onClick={() => navigate(NAV_PATHS.CREATE_NEW_PRODUCT_PAGE)}
      shouldDisplayButtons={false}
      shouldDisplayPrice={false}
      productName="Create A New Product"
    />
  );
}
