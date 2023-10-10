import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';

import { ProductsProxy } from '@utils';
import { ProductForm } from '@base-components';

export default function CreateProduct({ navigateCB }) {
  const onExecuteHandler = (data) => {
    const isCreated = ProductsProxy?.post({ id: uuid(), ...data });
    if (isCreated) navigateCB?.();
  };

  return (
    <ProductForm
      modificationType="post"
      executeButtonLabel="Create product"
      navigateCB={navigateCB}
      onExecute={onExecuteHandler}
    />
  );
}

CreateProduct.propTypes = {
  navigateCB: PropTypes.func,
};

CreateProduct.defaultProps = {
  navigateCB: undefined,
};
