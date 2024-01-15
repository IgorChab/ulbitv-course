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
    builder.addCase(loginByUsername.fulfilled, (state, action) => {
      state.isError = false;
      state.isLoading = false;
    });
    builder.addCase(loginByUsername.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(loginByUsername.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
  }
});

export const {
  actions: loginActions,
  reducer: loginReducer
} = loginSlice;
