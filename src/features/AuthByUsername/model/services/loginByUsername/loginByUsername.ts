import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { type User, userActions } from 'entities/User';
import { LocalStorageKeys } from 'shared/constants/LocalStorageKeys';

interface Payload {
  username: string
  password: string
  onCloseLoginModal?: () => void
}

export const loginByUsername = createAsyncThunk<User, Payload>(
  'login/loginByUsername',
  async (payload, thunkAPI) => {
    const {
      username,
      password
    } = payload;

    try {
      const response = await axios.post<User>('http://localhost:8000/login', {
        username,
        password
      });

      if (!response.data) {
        throw new Error('Data is empty');
      }

      thunkAPI.dispatch(userActions.setAuthData(response.data));
      localStorage.setItem(LocalStorageKeys.AUTH_USER, JSON.stringify(response.data));

      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue('error');
    }
  }
);
