import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';

import productSlice from './slices/products.slice';
import authorizationSlice from './slices/authorization.slice';

export default function storeConfig() {
  return configureStore(
    {
      reducer: {
        products: productSlice.reducer,
        authorization: authorizationSlice.reducer,
      },
    },
    // Only for development uses, delete in production
    composeWithDevTools()
  );
}
