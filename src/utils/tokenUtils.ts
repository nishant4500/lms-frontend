import { TOKEN_KEYS } from '../constants';
import { AuthTokens } from '../types';

export const getAccessToken = (): string | null => {
  return localStorage.getItem(TOKEN_KEYS.ACCESS);
};

export const getRefreshToken = (): string | null => {
  return localStorage.getItem(TOKEN_KEYS.REFRESH);
};

export const setTokens = (tokens: AuthTokens): void => {
  localStorage.setItem(TOKEN_KEYS.ACCESS, tokens.access);
  localStorage.setItem(TOKEN_KEYS.REFRESH, tokens.refresh);
};

export const clearTokens = (): void => {
  localStorage.removeItem(TOKEN_KEYS.ACCESS);
  localStorage.removeItem(TOKEN_KEYS.REFRESH);
};

export const isTokenExpired = (token: string): boolean => {
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.exp * 1000 < Date.now();
  } catch {
    return true;
  }
};
