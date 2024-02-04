import { createAsyncThunk } from '@reduxjs/toolkit';
import { type StateSchema, type ThunkExtra } from 'app/providers/StoreProvider';

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: StateSchema
  extra: ThunkExtra
}>();
