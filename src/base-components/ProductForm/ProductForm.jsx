import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  COMPONENTS_IDS,
  CURRENCY_SIGN,
  IMAGES_ALTS,
  isProductPriceValid,
  PLACEHOLDER_PRODUCT_IMAGE,
  removeBgFromImage,
  TEXT_CONTENT,
} from '@utils';
import {
  FormContainer,
  SubmitButton,
  TextInputField,
  PriceInputWrapper,
  PriceInputField,
  ImageInput,
  ImageInputDisplay,
  ProductContentContainer,
} from './ProductFrom.styled';

export default function ProductForm({
  children,
  onSubmit,
  productName,
  productPrice,
  productImage,
  submitButtonLabel,
  isReadOnlyMode,
}) {
  const [updatedProductName, setUpdatedProductName] = useState(productName);
  const [updatedPrice, setUpdatedPrice] = useState(productPrice);
  const [updatedImage, setUpdatedImage] = useState(productImage);

  const onProductNameChange = (event) => {
    setUpdatedProductName(event.target.value);
  };

  const onPriceChange = (event) => {
    const price = +event.target.value;
    const isValidPrice = isProductPriceValid(price);

    setUpdatedPrice((prevPrice) => (isValidPrice ? price : prevPrice));
  };

  const onImageChange = async (event) => {
    const [image] = event.target.files;
    const removedBgImage = await removeBgFromImage(image);
    setUpdatedImage(removedBgImage);
  };

  const data = {
    productName: updatedProductName || productName,
    price: updatedPrice,
    productImage: updatedImage,
  };

  const isImageEmpty = updatedImage === PLACEHOLDER_PRODUCT_IMAGE;
  const isPriceEmpty = !updatedPrice;
  const isNameEmpty = !updatedProductName;
  const isFormMissingInput = isNameEmpty || isPriceEmpty || isImageEmpty;
  return (
    <FormContainer>
      <ImageInputDisplay
        isReadOnlyMode={isReadOnlyMode}
        src={updatedImage}
        alt={IMAGES_ALTS.PRODUCT_IMAGE}
      />
      <ProductContentContainer>
        {!isReadOnlyMode && (
          <ImageInput
            htmlFor={COMPONENTS_IDS.UPLOAD_IMAGE_BUTTON}
            isEmptyInputValue={isImageEmpty}
          >
            {isImageEmpty
              ? TEXT_CONTENT.UPLOAD_PRODUCT_IMAGE_BUTTON
              : TEXT_CONTENT.CHANGE_PRODUCT_IMAGE_BUTTON}
            <input
              id={COMPONENTS_IDS.UPLOAD_IMAGE_BUTTON}
              hidden
              type="file"
              onChange={onImageChange}
            />
          </ImageInput>
        )}
        <TextInputField
          onChange={onProductNameChange}
          placeholder={TEXT_CONTENT.PRODUCT_NAME_INPUT}
          type="text"
          value={updatedProductName}
          isEmptyInputValue={isNameEmpty}
          isReadOnlyMode={isReadOnlyMode}
          readOnly={isReadOnlyMode}
        />
        <PriceInputWrapper
          isEmptyInputValue={isPriceEmpty}
          isReadOnlyMode={isReadOnlyMode}
        >
          {CURRENCY_SIGN}
          <PriceInputField
            onChange={onPriceChange}
            placeholder={productPrice}
            type="text"
            value={updatedPrice}
            isEmptyInputValue={isPriceEmpty}
            readOnly={isReadOnlyMode}
          />
        </PriceInputWrapper>
      </ProductContentContainer>
      {!isReadOnlyMode && (
        <SubmitButton
          label={submitButtonLabel}
          isDisabledButton={isFormMissingInput}
          onClickHandler={() => !isFormMissingInput && onSubmit(data)}
        />
      )}
      {children}
    </FormContainer>
  );
}

ProductForm.propTypes = {
  onSubmit: PropTypes.func,
  productImage: PropTypes.string,
  productName: PropTypes.string,
  productPrice: PropTypes.number,
  isReadOnlyMode: PropTypes.bool,
  submitButtonLabel: PropTypes.string,
};

ProductForm.defaultProps = {
  onSubmit: undefined,
  productImage: PLACEHOLDER_PRODUCT_IMAGE,
  productName: '',
  productPrice: 0,
  isReadOnlyMode: undefined,
  submitButtonLabel: undefined,
};
