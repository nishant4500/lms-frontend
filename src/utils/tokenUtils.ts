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

const base64UrlDecode = (str: string): string => {
  const padded = str.replace(/-/g, '+').replace(/_/g, '/').padEnd(str.length + ((4 - (str.length % 4)) % 4), '=');
  const binary = atob(padded);
  return decodeURIComponent(
    binary
      .split('')
      .map((c) => '%' + c.charCodeAt(0).toString(16).padStart(2, '0'))
      .join('')
  );
};

export const isTokenExpired = (token: string): boolean => {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return true;
    const payload = JSON.parse(base64UrlDecode(parts[1]));
    return typeof payload.exp !== 'number' || payload.exp * 1000 < Date.now();
  } catch {
    return true;
  }
};
