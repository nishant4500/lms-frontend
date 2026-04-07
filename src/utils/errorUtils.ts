import { ApiError } from '../types';

export const parseApiError = (error: unknown): ApiError => {
  if (error && typeof error === 'object' && 'response' in error) {
    const axiosError = error as { response?: { data?: { message?: string; detail?: string }; status?: number } };
    const response = axiosError.response;
    const message =
      response?.data?.message ||
      response?.data?.detail ||
      'An error occurred';
    return {
      message,
      status: response?.status,
    };
  }
  if (error instanceof Error) {
    return { message: error.message };
  }
  return { message: 'An unexpected error occurred' };
};
