import React from 'react';
import PropTypes from 'prop-types';
import {
  LiaCartPlusSolid as AddToCartIcon,
  LiaCartArrowDownSolid as RemoveFromCartIcon,
} from 'react-icons/lia';

import {
  CURRENCY_SIGN,
  PLACEHOLDER_PRODUCT_IMAGE,
  COMPONENTS_CLASSES,
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
  shouldDisplayButtons,
  shouldDisplayPrice,
  shouldDisplayName,
  shouldDisplayImage,
  children,
}) {
  const shouldDisplayProductContent =
    shouldDisplayPrice || shouldDisplayName || shouldDisplayButtons;

  return (
    <ProductContainer className={className} onClick={onClick} role="none">
      {!!selectedCount && <SelectedCount>({selectedCount})</SelectedCount>}
      {shouldDisplayImage && (
        <ProductImage
          src={productImage}
          alt={IMAGES_ALTS.PRODUCT_IMAGE}
          className={COMPONENTS_CLASSES.PRODUCT_IMAGE}
        />
      )}
      {shouldDisplayProductContent && (
        <ProductContentContainer>
          {shouldDisplayName && (
            <ProductName className={COMPONENTS_CLASSES.PRODUCT_NAME}>
              {productName}
            </ProductName>
          )}
          {shouldDisplayPrice && (
            <ProductPrice>{`${CURRENCY_SIGN} ${price}`}</ProductPrice>
          )}
          {shouldDisplayButtons && (
            <ButtonsContainer>
              <AddProductButton onClickHandler={onAdd}>
                <AddToCartIcon />
              </AddProductButton>
              <RemoveProductButton
                onClickHandler={() => !!selectedCount && onRemove()}
                isDisabledButton={selectedCount === 0}
              >
                <RemoveFromCartIcon />
              </RemoveProductButton>
            </ButtonsContainer>
          )}
          {children}
        </ProductContentContainer>
      )}
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
  shouldDisplayButtons: PropTypes.bool,
  shouldDisplayPrice: PropTypes.bool,
  shouldDisplayName: PropTypes.bool,
  shouldDisplayImage: PropTypes.bool,
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
  shouldDisplayButtons: true,
  shouldDisplayPrice: true,
  shouldDisplayName: true,
  shouldDisplayImage: true,
};
