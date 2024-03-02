import { createSlice } from '@reduxjs/toolkit';

import { fetchProfileDetails } from '../services/fetchProfileDetails/fetchProfileDetails';
import { updateProfileDetails } from '../services/updateProfileDetails/updateProfileDetails';
import { type ProfileSchema } from '../types/ProfileSchema';

const initialState: ProfileSchema = {
  data: undefined,
  error: undefined,
  isLoading: false
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProfileDetails.pending, (state) => {
      state.isLoading = true;
      state.error = undefined;
    });
    builder.addCase(fetchProfileDetails.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(fetchProfileDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = undefined;
      state.data = action.payload;
    });
    builder.addCase(updateProfileDetails.pending, (state) => {
      state.isLoading = true;
      state.error = undefined;
    });
    builder.addCase(updateProfileDetails.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(updateProfileDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = undefined;
      state.data = action.payload;
    });
  }
});

export const {
  actions: profileActions,
  reducer: profileReducer
} = profileSlice;
