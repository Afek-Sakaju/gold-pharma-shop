import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  removeBgFromImage,
  CURRENCY_SIGN,
  PLACEHOLDER_PRODUCT_IMAGE,
  CLASSES,
  IMAGES_ALTS,
} from '@utils';
import {
  FormContainer,
  SubmitButton,
  InputField,
  PriceInputWrapper,
  PriceInputField,
  ImageInput,
  ImageInputDisplay,
} from './ProductFrom.styled';

export default function ProductForm({
  children,
  onSubmit,
  productName,
  productPrice,
  productImage,
  submitButtonLabel,
}) {
  const [updatedProductName, setUpdatedProductName] = useState(productName);
  const [updatedPrice, setUpdatedPrice] = useState(productPrice);
  const [updatedImage, setUpdatedImage] = useState(productImage);

  const onProductNameChange = (event) => {
    setUpdatedProductName(event.target.value);
  };

  const onPriceChange = (event) => {
    const price = +event.target.value;
    const isValidPrice =
      typeof price === 'number' && price >= 0 && price <= 999;
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
      <ImageInputDisplay src={updatedImage} alt={IMAGES_ALTS.PRODUCT_IMAGE} />
      <ImageInput
        htmlFor="upload-image"
        className={`${isImageEmpty ? CLASSES.EMPTY_INPUT_VALUE : ''}`}
      >
        {isImageEmpty ? 'Upload Product Image' : 'Change Product Image'}
        <input id="upload-image" hidden type="file" onChange={onImageChange} />
      </ImageInput>
      <InputField
        onChange={onProductNameChange}
        placeholder="Enter Product Name"
        type="text"
        value={updatedProductName}
        className={`${isNameEmpty ? CLASSES.EMPTY_INPUT_VALUE : ''}`}
      />
      <PriceInputWrapper
        className={`${isPriceEmpty ? CLASSES.EMPTY_INPUT_VALUE : ''}`}
      >
        {CURRENCY_SIGN}
        <PriceInputField
          onChange={onPriceChange}
          placeholder={productPrice}
          type="text"
          value={updatedPrice}
          className={`${isPriceEmpty ? CLASSES.EMPTY_INPUT_VALUE : ''}`}
        />
      </PriceInputWrapper>
      <SubmitButton
        label={submitButtonLabel}
        className={`${isFormMissingInput ? CLASSES.DISABLED_BUTTON : ''}`}
        onClickHandler={() => !isFormMissingInput && onSubmit(data)}
      />
      {children}
    </FormContainer>
  );
}

ProductForm.propTypes = {
  onSubmit: PropTypes.func,
  productName: PropTypes.string,
  productPrice: PropTypes.number,
  productImage: PropTypes.string,
  submitButtonLabel: PropTypes.string,
};

ProductForm.defaultProps = {
  onSubmit: undefined,
  productName: '',
  productPrice: 0,
  productImage: PLACEHOLDER_PRODUCT_IMAGE,
  submitButtonLabel: undefined,
};
