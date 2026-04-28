import { createSlice } from '@reduxjs/toolkit';
import type { ProductState } from '../../models/data/ProductState';
import {
  getCategoriesThunk,
  getProductDetailThunk,
  getProductsByCategoryThunk,
  getProductsThunk,
} from '../thunks/ProductThunks';

const initialState: ProductState = {
  products: [],
  categories: [],
  selectedProduct: null,
  isLoading: false,
  error: null,
};

const ProductSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder

      // ALL PRODUCTS
      .addCase(getProductsThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getProductsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(getProductsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          typeof action.payload === 'string'
            ? action.payload
            : 'Products fetch failed';
      })

      // CATEGORIES
      .addCase(getCategoriesThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCategoriesThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload;
      })
      .addCase(getCategoriesThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          typeof action.payload === 'string'
            ? action.payload
            : 'Categories fetch failed';
      })

      // PRODUCT DETAIL
      .addCase(getProductDetailThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getProductDetailThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedProduct = action.payload;
      })
      .addCase(getProductDetailThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          typeof action.payload === 'string'
            ? action.payload
            : 'Product detail fetch failed';
      })

      // PRODUCTS BY CATEGORY
      .addCase(getProductsByCategoryThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getProductsByCategoryThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(getProductsByCategoryThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          typeof action.payload === 'string'
            ? action.payload
            : 'Category products fetch failed';
      });
  },
});

export default ProductSlice.reducer;
