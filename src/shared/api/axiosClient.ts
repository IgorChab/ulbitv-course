import axios from 'axios';
import { API_URL } from 'shared/constants/environment';
import { LocalStorageKeys } from 'shared/constants/LocalStorageKeys';

export const axiosClient = axios.create({
  baseURL: API_URL
});

axiosClient.interceptors.request.use(
  config => {
    const token = localStorage.getItem(LocalStorageKeys.AUTH_USER);
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  async error => {
    return await Promise.reject(error);
  }
);
