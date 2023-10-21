import React from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import { Nav, ProductForm } from '@base-components';
import { ProductsProxy } from '@utils';
import { PageTitle } from './CreateProduct.styled';

export default function CreateProduct() {
  const navigate = useNavigate();

  const onSubmitHandler = (data) => {
    const isCreated = ProductsProxy?.post({ id: uuid(), ...data });
    if (isCreated) navigate('/');
  };

  return (
    <div>
      <Nav logoUrl="/Afek-Sakaju/grocery-store/shop-logo.png">
        <PageTitle>Product Creation</PageTitle>
      </Nav>
      <ProductForm
        submitButtonLabel="Create product"
        onSubmit={onSubmitHandler}
      />
    </div>
  );
}
