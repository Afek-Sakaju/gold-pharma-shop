import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import { Nav, ProductForm } from '@base-components';
import {
  ProductsProxy,
  LOGO_SRC,
  BUTTONS_LABELS,
  NAV_PATHS,
  TEXT_CONTENT,
} from '@utils';
import { PageTitle } from './CreateProduct.styled';

export default function CreateProduct() {
  const isAdmin = false;

  const navigate = useNavigate();

  const onSubmitHandler = (data) => {
    const isCreated = ProductsProxy.post({ id: uuid(), ...data });
    if (isCreated) navigate(NAV_PATHS.AFTER_PRODUCT_CREATION);
  };

  useEffect(() => {
    if (!isAdmin) navigate(NAV_PATHS.AFTER_PRODUCT_CREATION);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAdmin]);

  return isAdmin ? (
    <div>
      <Nav logoUrl={LOGO_SRC}>
        <PageTitle>{TEXT_CONTENT.CREATE_PAGE_TITLE}</PageTitle>
      </Nav>
      <ProductForm
        submitButtonLabel={BUTTONS_LABELS.CREATE_PAGE_SUBMIT}
        onSubmit={onSubmitHandler}
      />
    </div>
  ) : null;
}
