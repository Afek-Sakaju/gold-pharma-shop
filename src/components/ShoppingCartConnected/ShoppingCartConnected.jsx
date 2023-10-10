/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

import { ShoppingCart } from '@base-components';
import { getSelectedProductsSelector, getTotalPriceSelector } from '@store';

function ShoppingCartConnected({ selectedProducts, totalPrice }) {
  const totalSelected = Object.values(selectedProducts).reduce(
    (total, products) => total + products,
    0
  );

  return <ShoppingCart totalPrice={totalPrice} totalSelected={totalSelected} />;
}

const mapStateToProps = (state) => ({
  selectedProducts: getSelectedProductsSelector(state),
  totalPrice: getTotalPriceSelector(state),
});

export default connect(mapStateToProps)(ShoppingCartConnected);
