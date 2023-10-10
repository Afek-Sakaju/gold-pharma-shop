import React from 'react';
import PropTypes from 'prop-types';
import { BsCart, BsCurrencyDollar } from 'react-icons/bs';

import './ShoppingCart.scss';

export default function ShoppingCart({ totalPrice, totalSelected }) {
  return (
    <div className="cart-container">
      <div>
        <BsCart /> {totalSelected}
      </div>
      <div>
        <BsCurrencyDollar /> {totalPrice}
      </div>
    </div>
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
