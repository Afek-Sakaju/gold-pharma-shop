import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  FormContainer,
  SubmitButton,
  InputField,
  PriceInputWrapper,
  PriceInputField,
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

  const onProductNameChange = (event) => {
    setUpdatedProductName(event.target.value);
  };
  const onPriceChange = (event) => {
    const price = +event.target.value;
    const isValidPrice =
      typeof price === 'number' && price >= 0 && price <= 1000;
    setUpdatedPrice((prevPrice) => (isValidPrice ? price : prevPrice));
  };

  const data = {
    productName: updatedProductName || productName,
    price: updatedPrice,
  };

  return (
    <FormContainer>
      <InputField
        label="Product:"
        onChange={onProductNameChange}
        placeholder={productName}
        type="text"
        value={updatedProductName}
      />
      <PriceInputWrapper>
        $
        <PriceInputField
          className="price"
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
  productName: 'Product name',
  productPrice: 0,
  submitButtonLabel: undefined,
};
