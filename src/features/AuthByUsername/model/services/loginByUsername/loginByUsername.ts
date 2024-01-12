import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { type User, userActions } from 'entities/User';
import { LocalStorageKeys } from 'shared/constants/LocalStorageKeys';

interface Payload {
  username: string
  password: string
  onCloseLoginModal?: () => void
}

export const loginByUsername = createAsyncThunk(
  'login/loginByUsername',
  async (payload: Payload, thunkAPI) => {
    const {
      username,
      password,
      onCloseLoginModal
    } = payload;
    try {
      const response = await axios.post<User>('http://localhost:8000/login', {
        username,
        password
      });

      thunkAPI.dispatch(userActions.setAuthData(response.data));
      localStorage.setItem(LocalStorageKeys.AUTH_USER, JSON.stringify(response.data));
      onCloseLoginModal?.();
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue('error');
    }
  }
);
