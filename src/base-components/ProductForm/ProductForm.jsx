import React, { useState } from 'react';
import PropTypes from 'prop-types';

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
  submitButtonLabel,
}) {
  const [updatedProductName, setUpdatedProductName] = useState(undefined);
  const [updatedPrice, setUpdatedPrice] = useState(productPrice);
  const [updatedImage, setUpdatedImage] = useState('');

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

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
    const file = event.target.files[0];
    const ImageBase64 = await convertBase64(file);
    setUpdatedImage(ImageBase64);
  };

  const data = {
    productName: updatedProductName || productName,
    price: updatedPrice,
  };

  return (
    <FormContainer>
      <ImageInputDisplay
        src={updatedImage || '/Afek-Sakaju/grocery-store/cucumber.jpg'}
        alt="Product Image"
      />
      <ImageInput htmlFor="upload-image">
        Upload Image
        <input id="upload-image" hidden type="file" onChange={onImageChange} />
      </ImageInput>
      <InputField
        onChange={onProductNameChange}
        placeholder={productName}
        type="text"
        value={updatedProductName}
      />
      <PriceInputWrapper>
        $
        <PriceInputField
          onChange={onPriceChange}
          placeholder={productPrice}
          type="text"
          value={updatedPrice}
        />
      </PriceInputWrapper>
      <SubmitButton
        label={submitButtonLabel}
        onClickHandler={() => onSubmit(data)}
      />
      {children}
    </FormContainer>
  );
}

ProductForm.propTypes = {
  onSubmit: PropTypes.func,
  productName: PropTypes.string,
  productPrice: PropTypes.number,
  submitButtonLabel: PropTypes.string,
};

ProductForm.defaultProps = {
  onSubmit: undefined,
  productName: 'Enter Product Name',
  productPrice: 0,
  submitButtonLabel: undefined,
};
