import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    productList: [],
    selectedProducts: {},
    totalPrice: 0,
  },
  reducers: {
    initProducts(state, action) {
      state.productList = action.payload.products;
    },
    addToShoppingCart(state, action) {
      const { id } = action.payload;

      const { productPrice } = state.productList.find((p) => p.id === id);

      state.selectedProducts[id] ||= 0;
      state.selectedProducts[id]++;
      state.totalPrice = parseFloat(
        Number(state.totalPrice + +productPrice).toFixed(2)
      );
    },
    removeFromShoppingCart(state, action) {
      const { id } = action.payload;
      const { productPrice } = state.productList.find((p) => p.id === id);

      if (state.selectedProducts[id]) {
        state.selectedProducts[id]--;
      }

      state.totalPrice = parseFloat(
        Number(state.totalPrice - productPrice).toFixed(2)
      );
    },
  },
});

export const {
  initProducts: initProductsAction,
  addToShoppingCart: addToShoppingCartAction,
  removeFromShoppingCart: removeFromShoppingCartAction,
} = productSlice.actions;

export default productSlice;
