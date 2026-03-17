import { createAsyncThunk } from '@reduxjs/toolkit';
import AuthService from '../../service/Auth.Service';
import { LoginParams } from '../../models/data/Auth';
import { User } from '../../models/data/User';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEYS = {
  ACCESS: 'access_token',
  REFRESH: 'refresh_token',
};

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (params: LoginParams, { rejectWithValue }) => {
    try {
      const response = await AuthService.login(params);

      // tokenları kaydet
      await AsyncStorage.setItem(STORAGE_KEYS.ACCESS, response.access_token);
      await AsyncStorage.setItem(STORAGE_KEYS.REFRESH, response.refresh_token);

      return response;
    } catch (error: any) {
      return rejectWithValue('Login failed');
    }
  },
);

export const getProfileThunk = createAsyncThunk(
  'auth/profile',
  async (_, { rejectWithValue }) => {
    try {
      const token = await AsyncStorage.getItem(STORAGE_KEYS.ACCESS);

      if (!token) {
        throw new Error('No token');
      }

      const user: User = await AuthService.getProfile(token);

      return { user, token };
    } catch (error) {
      return rejectWithValue('Profile fetch failed');
    }
  },
);

export const logoutThunk = createAsyncThunk('auth/logout', async () => {
  await AsyncStorage.removeItem(STORAGE_KEYS.ACCESS);
  await AsyncStorage.removeItem(STORAGE_KEYS.REFRESH);

  return true;
});
