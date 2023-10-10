import React from 'react';
import PropTypes from 'prop-types';
import { BsCart, BsCurrencyDollar } from 'react-icons/bs';

import { CartInnerContainer, CartContainer } from './ShoppingCart.styled';

export default function ShoppingCart({ totalPrice, totalSelected }) {
  return (
    <CartContainer>
      <CartInnerContainer>
        <BsCart /> {totalSelected}
      </CartInnerContainer>
      <CartInnerContainer>
        <BsCurrencyDollar /> {totalPrice}
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
