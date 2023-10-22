import React from 'react';
import PropTypes from 'prop-types';
import {
  LiaCartPlusSolid as AddToCartIcon,
  LiaCartArrowDownSolid as RemoveFromCartIcon,
} from 'react-icons/lia';

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
        src={productImage}
        alt="Product Image"
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
            // eslint-disable-next-line no-extra-boolean-cast
            className={`${!!selectedCount ? '' : 'disabled'}`}
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
  productImage: '/Afek-Sakaju/grocery-store/cucumber.jpg',
  productName: undefined,
  selectedCount: 0,
};
