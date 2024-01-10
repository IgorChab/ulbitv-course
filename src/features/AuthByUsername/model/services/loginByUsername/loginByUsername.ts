import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { type User, userActions } from 'entities/User';
import { LocalStorageKeys } from 'shared/constants/LocalStorageKeys';

interface AuthData {
  username: string
  password: string
}

export const loginByUsername = createAsyncThunk(
  'login/loginByUsername',
  async (authData: AuthData, thunkAPI) => {
    try {
      const response = await axios.post<User>('http://localhost:8000/login', authData);

      thunkAPI.dispatch(userActions.setAuthData(response.data));
      localStorage.setItem(LocalStorageKeys.AUTH_USER, JSON.stringify(response.data));
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue('error');
    }
  }
);
