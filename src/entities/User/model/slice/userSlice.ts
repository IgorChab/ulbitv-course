import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { LocalStorageKeys } from 'shared/constants/LocalStorageKeys';

import { type User, type UserSchema } from '../types/UserSchema';

const initialState: UserSchema = {};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (store, action: PayloadAction<User>) => {
      store.authData = action.payload;
    },
    initAuthData: (state) => {
      const user = localStorage.getItem(LocalStorageKeys.AUTH_USER);

      if (user) {
        state.authData = JSON.parse(user);
      }
    },
    logout: (state) => {
      localStorage.removeItem(LocalStorageKeys.AUTH_USER);
      state.authData = undefined;
    }
  }
});

export const {
  actions: userActions,
  reducer: userReducer
} = userSlice;
