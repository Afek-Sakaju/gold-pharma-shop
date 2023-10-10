import React from 'react';
import PropTypes from 'prop-types';

import { ProductsProxy } from '@utils';
import { Button, ProductForm } from '@base-components';

export default function EditProduct({ id, navigateCB, price, productName }) {
  const onExecuteHandler = (data) => {
    const isUpdated = ProductsProxy?.put(data, id);
    if (isUpdated) navigateCB?.();
  };

  return (
    <ProductForm
      executeButtonLabel="Update product"
      id={id}
      modificationType="put"
      onExecute={onExecuteHandler}
      price={price}
      productName={productName}
    >
      <Button
        className="modifier warning"
        label="Delete product"
        onClickHandler={() => ProductsProxy.delete(id) && navigateCB?.()}
        style={{ justifyContent: 'center' }}
      />
    </ProductForm>
  );
}

EditProduct.propTypes = {
  id: PropTypes.string,
  navigateCB: PropTypes.func,
  price: PropTypes.number,
  productName: PropTypes.string,
};

EditProduct.defaultProps = {
  id: undefined,
  navigateCB: undefined,
  price: 0,
  productName: 'product',
};
