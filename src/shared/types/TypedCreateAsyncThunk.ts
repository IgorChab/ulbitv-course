import { createAsyncThunk } from '@reduxjs/toolkit';
import { type StateSchema } from 'app/providers/StoreProvider';
import { type AxiosInstance } from 'axios';

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: StateSchema
  extra: {
    api: AxiosInstance
  }
}>();
