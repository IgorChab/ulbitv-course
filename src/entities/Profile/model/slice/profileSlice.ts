import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { fetchProfileDetails } from '../services/fetchProfileDetails/fetchProfileDetails';
import { type Profile, type ProfileSchema } from '../types/ProfileSchema';

const initialState: ProfileSchema = {
  data: undefined,
  error: undefined,
  isLoading: false,
  readonly: false
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfileData: (state, action: PayloadAction<Profile>) => {
      state.data = action.payload;
    }
  },
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
    });
  }
});

export const {
  actions: profileActions,
  reducer: profileReducer
} = profileSlice;
