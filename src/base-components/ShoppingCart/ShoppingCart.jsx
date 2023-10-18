import React from 'react';
import PropTypes from 'prop-types';

import {
  SelectedItemsContainer,
  CartContainer,
  CartIcon,
  TotalSelected,
  TotalPrice,
  DollarSign,
} from './ShoppingCart.styled';

export default function ShoppingCart({ totalPrice, totalSelected }) {
  return (
    <CartContainer>
      <DollarSign>$</DollarSign>
      <TotalPrice>{totalPrice}</TotalPrice>
      <SelectedItemsContainer>
        <CartIcon />
        <TotalSelected>{totalSelected}</TotalSelected>
      </SelectedItemsContainer>
    </CartContainer>
  );
}

ShoppingCart.propTypes = {
  totalPrice: PropTypes.number,
  totalSelected: PropTypes.number,
};

ShoppingCart.defaultProps = {
  totalPrice: 0,
  totalSelected: 0,
};
