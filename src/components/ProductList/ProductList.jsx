/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Loading, Product } from '@base-components';
import {
  addToShoppingCartAction,
  getProductsSelector,
  getSelectedProductsSelector,
  initProductsAction,
  removeFromShoppingCartAction,
} from '@store';
import { ProductsProxy } from '@utils';
import CreateProductButton from '../CreateProductButton/CreateProductButton';
import { ProductListContainer } from './ProductList.styled';

function ProductList({
  initProducts,
  onAdd,
  onRemove,
  products,
  selectedProducts,
}) {
  const navigate = useNavigate();
  const [isDataFetched, setIsDataFetched] = useState(false);

  useEffect(() => {
    ProductsProxy.getAllData()
      .then((data) => {
        if (!data) return;

        initProducts(data);
        setIsDataFetched(true);
      })
      .catch(() => {});

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isDataFetched ? (
    <ProductListContainer>
      <CreateProductButton />
      {products?.map((productData) => {
        const { id, productName, price } = productData;

        return (
          <Product
            key={id}
            onAdd={() => onAdd(id)}
            onClick={() => navigate(`/product/${id}`)}
            onRemove={() => onRemove(id)}
            price={+price}
            productName={productName}
            selectedCount={selectedProducts[id] ?? 0}
          />
        );
      })}
    </ProductListContainer>
  ) : (
    <Loading />
  );
}

const mapStateToProps = (state) => ({
  products: getProductsSelector(state),
  selectedProducts: getSelectedProductsSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  initProducts: (newProducts) => {
    dispatch(initProductsAction({ products: newProducts }));
  },
  onAdd: (id) => {
    dispatch(addToShoppingCartAction({ id }));
  },
  onRemove: (id) => {
    dispatch(removeFromShoppingCartAction({ id }));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
