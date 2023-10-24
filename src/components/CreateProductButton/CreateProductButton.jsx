import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Product } from '@base-components';
import { TEXT_CONTENT, NAV_PATHS } from '@utils';
import { CreateIcon } from './CreateProductButton.styled';

export default function CreateProductButton() {
  const navigate = useNavigate();

  return (
    <Product onClick={() => navigate(NAV_PATHS.CREATE_NEW_PRODUCT_PAGE)}>
      <section>{TEXT_CONTENT.CREATE_NEW_PRODUCT_BUTTON}</section>
      <CreateIcon size="4em" className="create-icon" />
    </Product>
  );
}
