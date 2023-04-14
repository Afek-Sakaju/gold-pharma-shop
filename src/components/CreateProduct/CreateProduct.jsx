import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';

import { ProductsProxy } from '@utils';
import { ActionButton, ContentWrapper, LabeledInput } from '@base-components';

function CreateProduct({ navigateCB }) {
  const [updatedProductName, setUpdatedProductName] = useState('');
  const [updatedPrice, setUpdatedPrice] = useState(0);

  const shouldNavigate = !!navigateCB;

  const onProductNameChange = (event) => {
    if (event.target.value === '') return;
    setUpdatedProductName(event.target.value);
  };
  const onPriceChange = (event) => {
    if (event.target.value === '') return;
    setUpdatedPrice(parseInt(event.target.value));
  };

  const data = useRef({});

  useEffect(() => {
    data.current = {
      id: uuid(),
      productName: updatedProductName,
      price: updatedPrice,
    };
  }, [updatedProductName, updatedPrice]);

  return (
    <ContentWrapper classes="product-modifier">
      <LabeledInput
        label="Enter product name:"
        placeholder="Product's name"
        onChangeHandler={onProductNameChange}
        type="text"
      />
      <LabeledInput
        label="Enter price:"
        placeholder="Product's price"
        onChangeHandler={onPriceChange}
        type="number"
        classes="price"
      />
      <ActionButton
        label="Create product"
        onClickHandler={() => {
          if (!updatedProductName || !updatedPrice) return;

          const isDeleted = ProductsProxy.post(data.current);
          if (shouldNavigate && isDeleted) navigateCB();
        }}
        classes="rectangle-button"
      />
    </ContentWrapper>
  );
}

CreateProduct.propTypes = {
  navigateCB: PropTypes.func,
};

CreateProduct.defaultProps = {
  navigateCB: undefined,
};

export default CreateProduct;
