import React from 'react';
import PropTypes from 'prop-types';
import {
  LiaCartPlusSolid as AddToCartIcon,
  LiaCartArrowDownSolid as RemoveFromCartIcon,
} from 'react-icons/lia';

import {
  CURRENCY_SIGN,
  PLACEHOLDER_PRODUCT_IMAGE,
  CLASSES,
  IMAGES_ALTS,
} from '@utils';
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
        alt={IMAGES_ALTS.PRODUCT_IMAGE}
        className={CLASSES.PRODUCT_IMAGE}
      />
      <ProductContentContainer>
        <ProductName className={CLASSES.PRODUCT_NAME}>
          {productName}
        </ProductName>
        <ProductPrice>{`${CURRENCY_SIGN} ${price}`}</ProductPrice>
        <ButtonsContainer>
          <AddProductButton onClickHandler={onAdd}>
            <AddToCartIcon />
          </AddProductButton>
          <RemoveProductButton
            onClickHandler={() => !!selectedCount && onRemove()}
            // eslint-disable-next-line no-extra-boolean-cast
            className={`${!!selectedCount ? '' : CLASSES.DISABLED_BUTTON}`}
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
  productImage: PLACEHOLDER_PRODUCT_IMAGE,
  productName: undefined,
  selectedCount: 0,
};
