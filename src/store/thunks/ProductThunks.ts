import { createAsyncThunk } from '@reduxjs/toolkit';
import ProductService from '../../service/Product.Service';

export const getProductsThunk = createAsyncThunk(
  'products/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await ProductService.getAllProducts();
      return response;
    } catch (error) {
      return rejectWithValue('Products fetch failed');
    }
  },
);

export const getCategoriesThunk = createAsyncThunk(
  'products/getCategories',
  async (_, { rejectWithValue }) => {
    try {
      const response = await ProductService.getAllCategories();
      return response;
    } catch (error) {
      return rejectWithValue('Categories fetch failed');
    }
  },
);

export const getProductDetailThunk = createAsyncThunk(
  'products/getDetail',
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await ProductService.getProductById(id);
      return response;
    } catch (error) {
      return rejectWithValue('Product detail fetch failed');
    }
  },
);

export const getProductsByCategoryThunk = createAsyncThunk(
  'products/getByCategory',
  async (categoryId: number, { rejectWithValue }) => {
    try {
      const response = await ProductService.getProductsByCategory(categoryId);
      return response;
    } catch (error) {
      return rejectWithValue('Category products fetch failed');
    }
  },
);
