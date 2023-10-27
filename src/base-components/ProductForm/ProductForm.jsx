import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  COMPONENTS_IDS,
  CURRENCY_SIGN,
  IMAGES_ALTS,
  MIN_PRODUCT_NAME_LENGTH,
  PLACEHOLDER_PRODUCT_IMAGE,
  TEXT_CONTENT,
  isProductNameLengthInRange,
  isProductPriceInRange,
  removeBgFromImageBase64,
} from '@utils';
import {
  FormContainer,
  ImageInput,
  ImageInputDisplay,
  PriceInputField,
  PriceInputWrapper,
  ProductContentContainer,
  SubmitButton,
  TextInputField,
} from './ProductFrom.styled';

export default function ProductForm({
  children,
  initialProductImage,
  initialProductName,
  initialProductPrice,
  isReadOnlyMode,
  onSubmit,
  submitButtonLabel,
}) {
  const [updatedProductName, setUpdatedProductName] =
    useState(initialProductName);
  const [updatedPrice, setUpdatedPrice] = useState(initialProductPrice);
  const [updatedImage, setUpdatedImage] = useState(initialProductImage);

  const onProductNameChange = (event) => {
    const name = event.target.value;
    const isNameInRange = isProductNameLengthInRange(name);

    if (isNameInRange) setUpdatedProductName(name);
  };

  const onPriceChange = (event) => {
    const price = +event.target.value;
    const isPriceValidNumber = typeof price === 'number';

    const isPriceInRange = isProductPriceInRange(price);

    if (isPriceValidNumber && isPriceInRange) setUpdatedPrice(price);
  };

  const onImageChange = async (event) => {
    const [image] = event.target.files;
    const removedBgImage = await removeBgFromImageBase64(image);
    setUpdatedImage(removedBgImage);
  };

  const data = {
    productName: updatedProductName,
    productPrice: updatedPrice,
    productImage: updatedImage,
  };

  const isImageEmpty = updatedImage === PLACEHOLDER_PRODUCT_IMAGE;
  const isPriceEmpty = !updatedPrice;
  const isNameEmpty = !updatedProductName;
  const isNameLengthBelowMin =
    updatedProductName?.length < MIN_PRODUCT_NAME_LENGTH;
  const isFormMissingInput =
    isNameEmpty || isNameLengthBelowMin || isPriceEmpty || isImageEmpty;
  return (
    <FormContainer>
      <ImageInputDisplay
        alt={IMAGES_ALTS.PRODUCT_IMAGE}
        isReadOnlyMode={isReadOnlyMode}
        src={updatedImage}
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
              hidden
              id={COMPONENTS_IDS.UPLOAD_IMAGE_BUTTON}
              onChange={onImageChange}
              type="file"
            />
          </ImageInput>
        )}
        <TextInputField
          isEmptyInputValue={isNameEmpty}
          isReadOnlyMode={isReadOnlyMode}
          onChange={onProductNameChange}
          placeholder={TEXT_CONTENT.PRODUCT_NAME_INPUT}
          readOnly={isReadOnlyMode}
          type="text"
          value={updatedProductName}
        />
        <PriceInputWrapper
          isEmptyInputValue={isPriceEmpty}
          isReadOnlyMode={isReadOnlyMode}
        >
          {CURRENCY_SIGN}
          <PriceInputField
            isEmptyInputValue={isPriceEmpty}
            onChange={onPriceChange}
            readOnly={isReadOnlyMode}
            type="text"
            value={updatedPrice}
          />
        </PriceInputWrapper>
      </ProductContentContainer>
      {!isReadOnlyMode && (
        <SubmitButton
          label={submitButtonLabel}
          isDisabledButton={isFormMissingInput}
          onClick={() => !isFormMissingInput && onSubmit(data)}
        />
      )}
      {children}
    </FormContainer>
  );
}

ProductForm.propTypes = {
  initialProductImage: PropTypes.string,
  initialProductName: PropTypes.string,
  initialProductPrice: PropTypes.number,
  isReadOnlyMode: PropTypes.bool,
  onSubmit: PropTypes.func,
  submitButtonLabel: PropTypes.string,
};

ProductForm.defaultProps = {
  initialProductImage: PLACEHOLDER_PRODUCT_IMAGE,
  initialProductName: '',
  initialProductPrice: 0,
  isReadOnlyMode: undefined,
  onSubmit: undefined,
  submitButtonLabel: undefined,
};
