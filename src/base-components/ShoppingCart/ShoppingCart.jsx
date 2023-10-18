import React from 'react';
import PropTypes from 'prop-types';

import {
  CartInnerContainer,
  CartContainer,
  CartIcon,
  CartTotalItems,
  //	CartPriceInnerContainer,
  CartTotalPrice,
  DollarSign,
} from './ShoppingCart.styled';

export default function ShoppingCart({ totalPrice, totalSelected }) {
  return (
    <CartContainer>
      <DollarSign>$</DollarSign>
      <CartTotalPrice>{totalPrice}</CartTotalPrice>
      <CartInnerContainer>
        <CartIcon />
        <CartTotalItems>{totalSelected}</CartTotalItems>
      </CartInnerContainer>
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
