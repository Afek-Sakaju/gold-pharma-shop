import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Product } from '@base-components';
import { NAV_PATHS } from '@utils';
import { CreateIcon } from './CreateProductButton.styled';

export default function CreateProductButton() {
  const navigate = useNavigate();

  return (
    <Product onClick={() => navigate(NAV_PATHS.CREATE_NEW_PRODUCT_PAGE)}>
      <section>Add product</section>
      <CreateIcon size="4em" className="create-icon" />
    </Product>
  );
}
