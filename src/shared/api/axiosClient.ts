import axios from 'axios';
import { LocalStorageKeys } from 'shared/constants/LocalStorageKeys';
import { API_URL } from 'shared/constants/environment';

export const axiosClient = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: localStorage.getItem(LocalStorageKeys.AUTH_USER)
  }
});
