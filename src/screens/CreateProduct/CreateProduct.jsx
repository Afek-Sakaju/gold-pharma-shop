import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { v4 as uuid } from 'uuid';

import { getIsAdminStatusSelector } from '@store';
import { Nav, ProductForm } from '@base-components';
import {
  BUTTONS_LABELS,
  LOGO_SRC,
  NAV_PATHS,
  TEXT_CONTENT,
  ProductsProxy,
} from '@utils';
import { AdminIcon } from './CreateProduct.styled';

// eslint-disable-next-line react/prop-types
function CreateProduct({ isAdmin }) {
  const navigate = useNavigate();

  const onSubmitHandler = (data) => {
    const isCreated = ProductsProxy.post({ id: uuid(), ...data });
    if (isCreated) navigate(NAV_PATHS.PRODUCT_LIST_PAGE);
  };

  const logoClickHandler = () => navigate(NAV_PATHS.PRODUCT_LIST_PAGE);

  useEffect(() => {
    if (!isAdmin) navigate(NAV_PATHS.PRODUCT_LIST_PAGE);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAdmin]);

  return isAdmin ? (
    <div>
      <Nav
        logoUrl={LOGO_SRC}
        onLogoClick={logoClickHandler}
        title={isAdmin && TEXT_CONTENT.CREATE_PAGE_TITLE}
      >
        {isAdmin && <AdminIcon />}
      </Nav>
      <ProductForm
        onSubmit={onSubmitHandler}
        submitButtonLabel={BUTTONS_LABELS.CREATE_PAGE_SUBMIT}
      />
    </div>
  ) : null;
}

const mapStateToProps = (state) => ({
  isAdmin: getIsAdminStatusSelector(state),
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CreateProduct);
