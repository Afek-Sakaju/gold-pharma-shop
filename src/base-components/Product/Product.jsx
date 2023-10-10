import React from 'react';
import PropTypes from 'prop-types';
import {
  BsCartPlus as AddToCartIcon,
  BsCartDash as RemoveFromCartIcon,
} from 'react-icons/bs';
import classNames from 'classnames';

import './Product.scss';
import Button from '../Button/Button';

export default function Product({
  className,
  onAdd,
  onClick,
  onRemove,
  price,
  productImage,
  productName,
  selectedCount,
}) {
  const classes = classNames('product', className);

  return (
    <div className={classes} onClick={onClick} role="none">
      <img
        src={productImage || '/Afek-Sakaju/grocery-store/cucumber.jpg'}
        alt="Cucumber"
        className="product-image"
      />
      <section className="product-price">${price}</section>
      <section className="product-name">{productName}</section>
      <div className="product-buttons-container">
        <Button
          className="product-button"
          label="Add to Cart"
          onClickHandler={onAdd}
        >
          <AddToCartIcon />
        </Button>
        {!!selectedCount && (
          <Button
            className="product-button warning"
            label={`Remove (${selectedCount})`}
            onClickHandler={onRemove}
          >
            <RemoveFromCartIcon />
          </Button>
        )}
      </div>
    </div>
  );
}

Product.propTypes = {
  className: PropTypes.string,
  onAdd: PropTypes.func,
  onClick: PropTypes.func,
  onRemove: PropTypes.func,
  price: PropTypes.number,
  productImage: PropTypes.string,
  productName: PropTypes.string,
  selectedCount: PropTypes.number,
};

Product.defaultProps = {
  className: '',
  onAdd: undefined,
  onClick: undefined,
  onRemove: undefined,
  price: 0,
  productImage: undefined,
  productName: undefined,
  selectedCount: 0,
};
