import { createSlice } from '@reduxjs/toolkit';

import { loginByUsername } from '../services/loginByUsername/loginByUsername';
import { type LoginSchema } from '../types/LoginSchema';

const initialState: LoginSchema = {
  isLoading: false,
  isError: false
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginByUsername.fulfilled, (state) => {
      state.isError = false;
      state.isLoading = false;
    });
    builder.addCase(loginByUsername.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(loginByUsername.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  }
});

export const {
  actions: loginActions,
  reducer: loginReducer
} = loginSlice;
