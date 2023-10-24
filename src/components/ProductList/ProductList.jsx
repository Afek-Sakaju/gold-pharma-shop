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
import { ProductsProxy, NAV_PATHS } from '@utils';
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
        const { id, productName, productImage, price } = productData;

        return (
          <Product
            key={id}
            onAdd={() => onAdd(id)}
            onClick={() => navigate(`${NAV_PATHS.PRODUCT_PATH}/${id}`)}
            onRemove={() => onRemove(id)}
            productName={productName}
            price={+price}
            productImage={productImage}
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
