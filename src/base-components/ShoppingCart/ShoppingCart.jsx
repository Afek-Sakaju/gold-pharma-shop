import React from 'react';
import PropTypes from 'prop-types';

import { CURRENCY_SIGN } from '@utils';
import {
  CartContainer,
  CartIcon,
  CurrencySign,
  SelectedItemsContainer,
  TotalPrice,
  TotalSelected,
} from './ShoppingCart.styled';

export default function ShoppingCart({ totalPrice, totalSelected }) {
  return (
    <CartContainer>
      <CurrencySign>{CURRENCY_SIGN}</CurrencySign>
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
