import api from './api';
import { User } from '../types';

export const userService = {
  async getProfile(): Promise<User> {
    const response = await api.get<User>('/api/users/profile/');
    return response.data;
  },

  async updateProfile(data: Partial<User>): Promise<User> {
    const response = await api.patch<User>('/api/users/profile/', data);
    return response.data;
  },
};
