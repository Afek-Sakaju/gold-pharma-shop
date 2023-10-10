import React from 'react';
import PropTypes from 'prop-types';
import {
  BsCartPlus as AddToCartIcon,
  BsCartDash as RemoveFromCartIcon,
} from 'react-icons/bs';

import {
  AddProductButton,
  ButtonsContainer,
  ProductContainer,
  ProductImage,
  ProductName,
  ProductPrice,
  RemoveProductButton,
} from './Product.styled';

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
  return (
    <ProductContainer className={className} onClick={onClick} role="none">
      <ProductImage
        src={productImage || '/Afek-Sakaju/grocery-store/cucumber.jpg'}
        alt="Cucumber"
        className="product-image"
      />
      <ProductName className="product-price">${price}</ProductName>
      <ProductPrice className="product-name">{productName}</ProductPrice>
      <ButtonsContainer>
        <AddProductButton label="Add to Cart" onClickHandler={onAdd}>
          <AddToCartIcon />
        </AddProductButton>
        {!!selectedCount && (
          <RemoveProductButton
            label={`Remove (${selectedCount})`}
            onClickHandler={onRemove}
          >
            <RemoveFromCartIcon />
          </RemoveProductButton>
        )}
      </ButtonsContainer>
    </ProductContainer>
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
