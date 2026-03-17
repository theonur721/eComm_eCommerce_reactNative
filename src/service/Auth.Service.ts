import URLS from './Urls';
import verbs from './Verbs';
import type { LoginParams, LoginResponse } from '../models/data/Auth';
import type { User } from '../models/data/User';

const login = (params: LoginParams): Promise<LoginResponse> => {
  return verbs.post<LoginResponse>(URLS.AUTH.LOGIN, params);
};

const getProfile = (token: string): Promise<User> => {
  return verbs.get<User>(URLS.AUTH.PROFILE, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const refreshToken = (refreshTokenValue: string): Promise<LoginResponse> => {
  return verbs.post<LoginResponse>(URLS.AUTH.REFRESH_TOKEN, {
    refreshToken: refreshTokenValue,
  });
};

export default {
  login,
  getProfile,
  refreshToken,
};
