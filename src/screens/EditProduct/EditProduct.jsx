import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

import { getIsAdminStatusSelector } from '@store';
import { Loading, Nav, ProductForm } from '@base-components';
import {
  BUTTONS_LABELS,
  LOGO_SRC,
  NAV_PATHS,
  TEXT_CONTENT,
  ProductsProxy,
} from '@utils';

// eslint-disable-next-line react/prop-types
function EditProduct({ isAdmin }) {
  const navigate = useNavigate();
  const { id } = useParams();

  const [isDataFetched, setIsDataFetched] = useState(false);
  const [productData, setProductData] = useState({
    productName: null,
    productPrice: null,
    productImage: null,
  });

  const onSubmitHandler = (data) => {
    const isUpdated = ProductsProxy.put(data, id);
    if (isUpdated) navigate(NAV_PATHS.PRODUCT_LIST_PAGE);
  };

  const logoClickHandler = () => navigate(NAV_PATHS.PRODUCT_LIST_PAGE);

  useEffect(() => {
    ProductsProxy.getData(id)
      .then((data) => {
        const { productName, productPrice, productImage } = data;
        setProductData({ productName, productPrice, productImage });
        setIsDataFetched(true);
      })
      .catch(() => {});

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isDataFetched ? (
    <div>
      <Nav
        logoUrl={LOGO_SRC}
        onLogoClick={logoClickHandler}
        title={isAdmin ? TEXT_CONTENT.EDIT_PAGE_TITLE : ''}
        shouldAddAdminIcon={isAdmin}
      />
      <ProductForm
        initialProductImage={productData.productImage}
        initialProductName={productData.productName}
        initialProductPrice={+productData.productPrice}
        isReadOnlyMode={!isAdmin}
        onSubmit={onSubmitHandler}
        submitButtonLabel={BUTTONS_LABELS.EDIT_PAGE_SUBMIT}
      />
    </div>
  ) : (
    <Loading />
  );
}

const mapStateToProps = (state) => ({
  isAdmin: getIsAdminStatusSelector(state),
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(EditProduct);
