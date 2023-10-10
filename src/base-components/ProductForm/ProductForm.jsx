import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './ProductForm.scss';
import InputField from '../InputField/InputField';
import Button from '../Button/Button';

export default function ProductForm({
  children,
  executeButtonLabel,
  onExecute,
  price,
  productName,
}) {
  const [updatedProductName, setUpdatedProductName] = useState(undefined);
  const [updatedPrice, setUpdatedPrice] = useState(price);

  const onProductNameChange = (event) => {
    setUpdatedProductName(event.target.value);
  };
  const onPriceChange = (event) => {
    const p = event.target.value;
    setUpdatedPrice(p < 0 ? 0 : p);
  };

  const data = {
    productName: updatedProductName || productName,
    price: updatedPrice,
  };

  return (
    <div className="product-modifier">
      {children}
      <InputField
        label="Product:"
        onChangeHandler={onProductNameChange}
        placeholder={productName}
        type="text"
        value={updatedProductName}
      />
      <InputField
        className="price"
        label="Price:"
        onChangeHandler={onPriceChange}
        placeholder={price}
        type="number"
        value={updatedPrice}
      />
      <Button
        className="modifier"
        label={executeButtonLabel}
        onClickHandler={() => onExecute(data)}
        style={{ justifyContent: 'center' }}
      />
      {children}
    </div>
  );
}

ProductForm.propTypes = {
  executeButtonLabel: PropTypes.string,
  onExecute: PropTypes.func,
  price: PropTypes.number,
  productName: PropTypes.string,
};

ProductForm.defaultProps = {
  executeButtonLabel: undefined,
  onExecute: undefined,
  price: 0,
  productName: 'Product name',
};
