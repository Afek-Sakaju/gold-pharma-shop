import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import { Nav, ProductForm } from '@base-components';
import {
  BUTTONS_LABELS,
  LOGO_SRC,
  NAV_PATHS,
  TEXT_CONTENT,
  ProductsProxy,
} from '@utils';
import { PageTitle } from './CreateProduct.styled';

export default function CreateProduct() {
  const isAdmin = false;

  const navigate = useNavigate();

  const onSubmitHandler = (data) => {
    const isCreated = ProductsProxy.post({ id: uuid(), ...data });
    if (isCreated) navigate(NAV_PATHS.HOME_PAGE);
  };

  useEffect(() => {
    if (!isAdmin) navigate(NAV_PATHS.HOME_PAGE);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAdmin]);

  return isAdmin ? (
    <div>
      <Nav logoUrl={LOGO_SRC}>
        <PageTitle>{TEXT_CONTENT.CREATE_PAGE_TITLE}</PageTitle>
      </Nav>
      <ProductForm
        onSubmit={onSubmitHandler}
        submitButtonLabel={BUTTONS_LABELS.CREATE_PAGE_SUBMIT}
      />
    </div>
  ) : null;
}
