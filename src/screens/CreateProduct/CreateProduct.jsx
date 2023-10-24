import React from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import { Nav, ProductForm } from '@base-components';
import { ProductsProxy, LOGO_SRC, BUTTONS_LABELS } from '@utils';
import { PageTitle } from './CreateProduct.styled';

export default function CreateProduct() {
  const navigate = useNavigate();

  const onSubmitHandler = (data) => {
    const isCreated = ProductsProxy?.post({ id: uuid(), ...data });
    if (isCreated) navigate('/');
  };

  return (
    <div>
      <Nav logoUrl={LOGO_SRC}>
        <PageTitle>Product Creation</PageTitle>
      </Nav>
      <ProductForm
        submitButtonLabel={BUTTONS_LABELS.CREATE_PAGE_SUBMIT}
        onSubmit={onSubmitHandler}
      />
    </div>
  );
}
