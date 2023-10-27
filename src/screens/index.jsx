import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes as Switch,
  Navigate,
} from 'react-router-dom';

import { NAV_PATHS } from '@utils';
import HomePage from './HomePage/HomePage';
import EditProduct from './EditProduct/EditProduct';
import CreateProduct from './CreateProduct/CreateProduct';
import ProductsListPage from './ProductsListPage/ProductsListPage';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={NAV_PATHS.HOME_PAGE} element={<HomePage />} />
        <Route
          path={NAV_PATHS.PRODUCT_LIST_PAGE}
          element={<ProductsListPage />}
        />
        <Route
          path={NAV_PATHS.CREATE_NEW_PRODUCT_PAGE}
          element={<CreateProduct />}
        />
        <Route
          path={`${NAV_PATHS.PRODUCT_PATH}/:id`}
          element={<EditProduct />}
        />
        <Route path="*" element={<Navigate to={NAV_PATHS.HOME_PAGE} />} />
      </Switch>
    </BrowserRouter>
  );
}
