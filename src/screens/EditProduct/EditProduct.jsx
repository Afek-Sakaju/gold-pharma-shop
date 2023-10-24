import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { ProductForm, Nav, Loading } from '@base-components';
import {
  ProductsProxy,
  LOGO_SRC,
  BUTTONS_LABELS,
  NAV_PATHS,
  TEXT_CONTENT,
} from '@utils';
import { PageTitle } from './EditProduct.styled';

export default function EditProduct() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [isDataFetched, setIsDataFetched] = useState(false);
  const [productData, setProductData] = useState({
    productName: null,
    price: null,
    productImage: null,
  });

  const onSubmitHandler = (data) => {
    const isUpdated = ProductsProxy.put(data, id);
    if (isUpdated) navigate(NAV_PATHS.AFTER_PRODUCT_UPDATE);
  };

  useEffect(() => {
    ProductsProxy.getData(id)
      .then((data) => {
        const { productName, price, productImage } = data;
        setProductData({ productName, price, productImage });
        setIsDataFetched(true);
      })
      .catch(() => {});

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isDataFetched ? (
    <div>
      <Nav logoUrl={LOGO_SRC}>
        <PageTitle>{TEXT_CONTENT.EDIT_PAGE_TITLE}</PageTitle>
      </Nav>
      <ProductForm
        submitButtonLabel={BUTTONS_LABELS.EDIT_PAGE_SUBMIT}
        onSubmit={onSubmitHandler}
        productPrice={+productData.price}
        productName={productData.productName}
        productImage={productData.productImage}
      />
    </div>
  ) : (
    <Loading />
  );
}
