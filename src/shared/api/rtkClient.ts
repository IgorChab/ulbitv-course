import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from 'shared/constants/environment';
import { LocalStorageKeys } from 'shared/constants/LocalStorageKeys';

export const rtkClient = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: headers => {
      const token = localStorage.getItem(LocalStorageKeys.AUTH_USER);
      if (token) {
        headers.set('Authorization', token);
      }
      return headers;
    }
  }),
  endpoints: () => ({})
});
