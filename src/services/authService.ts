import api from './api';
import { LoginCredentials, RegisterData, AuthTokens, User } from '../types';
import { setTokens, clearTokens } from '../utils/tokenUtils';

interface LoginResponse {
  access: string;
  refresh: string;
  user: User;
}

interface RegisterResponse {
  user: User;
  access: string;
  refresh: string;
}

export const authService = {
  async login(credentials: LoginCredentials): Promise<LoginResponse> {
    const response = await api.post<LoginResponse>('/api/auth/login/', credentials);
    const { access, refresh } = response.data;
    setTokens({ access, refresh } as AuthTokens);
    return response.data;
  },

  async register(data: RegisterData): Promise<RegisterResponse> {
    const response = await api.post<RegisterResponse>('/api/auth/register/', data);
    if (response.data.access && response.data.refresh) {
      setTokens({ access: response.data.access, refresh: response.data.refresh });
    }
    return response.data;
  },

  async logout(): Promise<void> {
    try {
      await api.post('/api/auth/logout/');
    } finally {
      clearTokens();
    }
  },

  async refreshToken(refreshToken: string): Promise<AuthTokens> {
    const response = await api.post<AuthTokens>('/api/token/refresh/', {
      refresh: refreshToken,
    });
    setTokens(response.data);
    return response.data;
  },
};
