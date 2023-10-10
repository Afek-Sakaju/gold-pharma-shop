import React from 'react';
import { useNavigate } from 'react-router-dom';

import Product from '@base-components';
import { CreateIcon } from './CreateProductButton.styled';

export default function CreateProductButton() {
  const navigate = useNavigate();

  return (
    <Product onClick={() => navigate('/product/new')}>
      <section>Add product</section>
      <CreateIcon size="4em" className="create-icon" />
    </Product>
  );
}
