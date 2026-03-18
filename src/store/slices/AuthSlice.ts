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

const clearAuthState = (state: AuthState) => {
  state.user = null;
  state.accessToken = null;
  state.refreshToken = null;
  state.isAuthenticated = false;
  state.isLoading = false;
  state.error = null;
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loginThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.accessToken = action.payload.access_token;
        state.refreshToken = action.payload.refresh_token;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          typeof action.payload === 'string' ? action.payload : 'Login failed';
      })

      .addCase(getProfileThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getProfileThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.accessToken = action.payload.token;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(getProfileThunk.rejected, (state, action) => {
        clearAuthState(state);
        state.error =
          typeof action.payload === 'string'
            ? action.payload
            : 'Profile fetch failed';
      })

      .addCase(logoutThunk.pending, state => {
        clearAuthState(state);
      })
      .addCase(logoutThunk.fulfilled, state => {
        clearAuthState(state);
      })
      .addCase(logoutThunk.rejected, (state, action) => {
        clearAuthState(state);
        state.error =
          typeof action.payload === 'string' ? action.payload : 'Logout failed';
      });
  },
});

export default AuthSlice.reducer;
