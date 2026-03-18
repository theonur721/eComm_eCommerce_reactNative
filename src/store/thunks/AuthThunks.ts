import { createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthService from '../../service/Auth.Service';
import type { LoginParams } from '../../models/data/Auth';
import type { User } from '../../models/data/User';

const STORAGE_KEYS = {
  ACCESS: 'access_token',
  REFRESH: 'refresh_token',
};

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (params: LoginParams, { rejectWithValue }) => {
    try {
      const response = await AuthService.login(params);

      await AsyncStorage.setItem(STORAGE_KEYS.ACCESS, response.access_token);
      await AsyncStorage.setItem(STORAGE_KEYS.REFRESH, response.refresh_token);

      return response;
    } catch (error) {
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
        return rejectWithValue('No token');
      }

      const user: User = await AuthService.getProfile(token);

      return { user, token };
    } catch (error) {
      return rejectWithValue('Profile fetch failed');
    }
  },
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await AsyncStorage.multiRemove([
        STORAGE_KEYS.ACCESS,
        STORAGE_KEYS.REFRESH,
      ]);

      return true;
    } catch (error) {
      return rejectWithValue('Logout failed');
    }
  },
);
