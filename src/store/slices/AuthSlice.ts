import { createSlice } from '@reduxjs/toolkit';
import type { AuthState } from '../../models/data/Auth';
import { loginThunk, getProfileThunk, logoutThunk } from '../thunks/AuthThunks';

const initialState: AuthState = {
  user: null,
  accessToken: null,
  refreshToken: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder

      // LOGIN
      .addCase(loginThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.accessToken = action.payload.access_token;
        state.refreshToken = action.payload.refresh_token;
        state.isAuthenticated = true;
      })
      .addCase(loginThunk.rejected, state => {
        state.isLoading = false;
        state.error = 'Login failed';
      })

      // PROFILE
      .addCase(getProfileThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(getProfileThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.accessToken = action.payload.token;
        state.isAuthenticated = true;
      })
      .addCase(getProfileThunk.rejected, state => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      })

      // LOGOUT
      .addCase(logoutThunk.fulfilled, state => {
        state.user = null;
        state.accessToken = null;
        state.refreshToken = null;
        state.isAuthenticated = false;
      });
  },
});

export default AuthSlice.reducer;
