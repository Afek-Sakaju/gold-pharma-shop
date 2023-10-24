import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { removeBgFromImage, CURRENCY_SIGN } from '@utils';
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

  const isImageEmpty =
    updatedImage === '/Afek-Sakaju/grocery-store/cucumber.jpg';
  const isPriceEmpty = !updatedPrice;
  const isNameEmpty = !updatedProductName;
  const isFormMissingInput = isNameEmpty || isPriceEmpty || isImageEmpty;
  return (
    <FormContainer>
      <ImageInputDisplay src={updatedImage} alt="Product Image" />
      <ImageInput
        htmlFor="upload-image"
        className={`${isImageEmpty ? 'empty-value' : ''}`}
      >
        {isImageEmpty ? 'Upload Product Image' : 'Change Product Image'}
        <input id="upload-image" hidden type="file" onChange={onImageChange} />
      </ImageInput>
      <InputField
        onChange={onProductNameChange}
        placeholder="Enter Product Name"
        type="text"
        value={updatedProductName}
        className={`${isNameEmpty ? 'empty-value' : ''}`}
      />
      <PriceInputWrapper className={`${isPriceEmpty ? 'empty-value' : ''}`}>
        {CURRENCY_SIGN}
        <PriceInputField
          onChange={onPriceChange}
          placeholder={productPrice}
          type="text"
          value={updatedPrice}
          className={`${isPriceEmpty ? 'empty-value' : ''}`}
        />
      </PriceInputWrapper>
      <SubmitButton
        label={submitButtonLabel}
        className={`${isFormMissingInput ? 'disabled' : ''}`}
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
  productImage: '/Afek-Sakaju/grocery-store/cucumber.jpg',
  submitButtonLabel: undefined,
};
