/* eslint-disable no-unused-vars */
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
  ProductContentContainer,
  SelectedCount,
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
      {!!selectedCount && <SelectedCount>({selectedCount})</SelectedCount>}
      <ProductImage
        src={productImage || '/Afek-Sakaju/grocery-store/cucumber.jpg'}
        alt="Cucumber"
        className="product-image"
      />
      <ProductContentContainer>
        <ProductName className="product-name">{productName}</ProductName>
        <ProductPrice className="product-price">${price}</ProductPrice>
        <ButtonsContainer>
          <AddProductButton onClickHandler={onAdd}>
            <AddToCartIcon />
          </AddProductButton>
          <RemoveProductButton
            onClickHandler={() => !!selectedCount && onRemove()}
          >
            <RemoveFromCartIcon />
          </RemoveProductButton>
        </ButtonsContainer>
      </ProductContentContainer>
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
