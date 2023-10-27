import React from 'react';
import { useNavigate } from 'react-router-dom';

import { NAV_PATHS, TEXT_CONTENT } from '@utils';
import { Product } from '@base-components';

export default function NewProductButton() {
  const navigate = useNavigate();

  return (
    <Product
      onClick={() => navigate(NAV_PATHS.CREATE_NEW_PRODUCT_PAGE)}
      productName={TEXT_CONTENT.CREATE_NEW_PRODUCT_BUTTON}
      shouldDisplayButtons={false}
      shouldDisplayPrice={false}
    />
  );
}
