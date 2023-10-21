import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { ProductsProxy } from '@utils';
import { ProductForm, Nav, Loading } from '@base-components';
import { PageTitle } from './EditProduct.styled';

export default function EditProduct() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [isDataFetched, setIsDataFetched] = useState(false);
  const [productData, setProductData] = useState({
    productName: null,
    price: null,
  });

  const onSubmitHandler = (data) => {
    const isUpdated = ProductsProxy?.put(data, id);
    if (isUpdated) navigate('/');
  };

  useEffect(() => {
    ProductsProxy.getData(id)
      .then((data) => {
        const { productName, price } = data;
        setProductData({ productName, price });
        setIsDataFetched(true);
      })
      .catch(() => {});

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isDataFetched ? (
    <div className="product-modifier-container">
      <Nav logoUrl="/Afek-Sakaju/grocery-store/shop-logo.png">
        <PageTitle>Product Edit Mode</PageTitle>
      </Nav>
      <ProductForm
        submitButtonLabel="Update"
        onSubmit={onSubmitHandler}
        productPrice={+productData.price}
        productName={productData.productName}
      />
    </div>
  ) : (
    <Loading />
  );
}
