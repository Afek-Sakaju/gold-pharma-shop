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
import NewProductButton from '../NewProductButton/NewProductButton';
import { ProductListContainer } from './ProductList.styled';

function ProductList({
  initProducts,
  isAdmin,
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
      .catch((err) => {
        console.error(err);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isDataFetched ? (
    <ProductListContainer>
      {isAdmin && <NewProductButton />}
      {products?.map((productData) => {
        const { id, productName, productImage, productPrice } = productData;

        return (
          <Product
            key={id}
            onAdd={() => onAdd(id)}
            onClick={() => navigate(`${NAV_PATHS.PRODUCT_PATH}/${id}`)}
            onRemove={() => onRemove(id)}
            productImage={productImage}
            productName={productName}
            productPrice={+productPrice}
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
