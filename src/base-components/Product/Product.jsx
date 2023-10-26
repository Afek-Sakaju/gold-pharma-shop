import React from 'react';
import PropTypes from 'prop-types';
import {
  LiaCartPlusSolid as AddToCartIcon,
  LiaCartArrowDownSolid as RemoveFromCartIcon,
} from 'react-icons/lia';

import {
  COMPONENTS_CLASSES,
  CURRENCY_SIGN,
  IMAGES_ALTS,
  PLACEHOLDER_PRODUCT_IMAGE,
} from '@utils';
import {
  AddProductButton,
  ButtonsContainer,
  ProductContainer,
  ProductContentContainer,
  ProductImage,
  ProductName,
  ProductPrice,
  RemoveProductButton,
  SelectedCount,
} from './Product.styled';

export default function Product({
  children,
  className,
  onAdd,
  onClick,
  onRemove,
  productPrice,
  productImage,
  productName,
  selectedCount,
  shouldDisplayButtons,
  shouldDisplayImage,
  shouldDisplayName,
  shouldDisplayPrice,
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
            <ProductPrice>{`${CURRENCY_SIGN} ${productPrice}`}</ProductPrice>
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
  productImage: PropTypes.string,
  productName: PropTypes.string,
  productPrice: PropTypes.number,
  selectedCount: PropTypes.number,
  shouldDisplayButtons: PropTypes.bool,
  shouldDisplayImage: PropTypes.bool,
  shouldDisplayName: PropTypes.bool,
  shouldDisplayPrice: PropTypes.bool,
};

Product.defaultProps = {
  className: '',
  onAdd: undefined,
  onClick: undefined,
  onRemove: undefined,
  productPrice: 0,
  productImage: PLACEHOLDER_PRODUCT_IMAGE,
  productName: undefined,
  selectedCount: 0,
  shouldDisplayButtons: true,
  shouldDisplayImage: true,
  shouldDisplayName: true,
  shouldDisplayPrice: true,
};
