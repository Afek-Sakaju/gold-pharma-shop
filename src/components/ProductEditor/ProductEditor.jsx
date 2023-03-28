import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import { ProductsProxy } from '../../utils';
import {
  ActionButton,
  ContentWrapper,
  LabeledInput,
} from '../../base-components';

function ProductEditor({ id, productName, price, navigatePath }) {
  const [updatedProductName, setUpdatedProductName] = useState(productName);
  const [updatedPrice, setUpdatedPrice] = useState(price);

  const navigate = useNavigate();
  const shouldNavigate = !!navigatePath;

  const onProductNameChange = (event) => {
    setUpdatedProductName(event.target.value);
  };
  const onPriceChange = (event) => {
    const p = event.target.value;
    setUpdatedPrice(parseInt(p < 0 ? 0 : p));
  };

  const data = {
    productName: updatedProductName || productName,
    price: updatedPrice || price,
  };

  return (
    <ContentWrapper classes="product">
      <LabeledInput
        inputState={updatedProductName}
        onChangeHandler={onProductNameChange}
        label="Product:"
        type="text"
      />
      <LabeledInput
        inputState={updatedPrice}
        onChangeHandler={onPriceChange}
        label="Price :"
        type="number"
        classes="price-input"
      />
      <ActionButton
        label="Delete product"
        onClickHandler={() => {
          const isDeleted = ProductsProxy.delete(id);
          if (shouldNavigate && isDeleted) navigate(navigatePath);
        }}
        classes="rectangle-button delete-button"
      />
      <ActionButton
        label="Update product"
        onClickHandler={() => {
          const isUpdated = ProductsProxy.put(data, id);
          if (shouldNavigate && isUpdated) navigate(navigatePath);
        }}
        classes="rectangle-button"
      />
    </ContentWrapper>
  );
}

ProductEditor.propTypes = {
  id: PropTypes.string,
  productName: PropTypes.string,
  price: PropTypes.number,
  navigateUrl: PropTypes.string,
};

ProductEditor.defaultProps = {
  id: undefined,
  productName: 'product',
  price: 0,
  navigateUrl: undefined,
};

export default ProductEditor;
