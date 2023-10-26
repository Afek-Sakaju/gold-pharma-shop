import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes as Switch,
  Navigate,
} from 'react-router-dom';

import HomePage from './HomePage/HomePage';
import EditProduct from './EditProduct/EditProduct';
import CreateProduct from './CreateProduct/CreateProduct';
import ProductsListPage from './ProductsListPage/ProductsListPage';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ProductsListPage />} />
        <Route path="/product/new" element={<CreateProduct />} />
        <Route path="/product/:id" element={<EditProduct />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Switch>
    </BrowserRouter>
  );
}
