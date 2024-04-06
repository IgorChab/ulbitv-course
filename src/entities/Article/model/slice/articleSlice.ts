import { createSlice } from '@reduxjs/toolkit';

import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { type ArticleSchema } from '../types/ArticleSchema';

const initialState: ArticleSchema = {
  data: undefined,
  isLoading: false,
  error: undefined
};

const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchArticleById.pending, (state, action) => {
      state.isLoading = true;
      state.error = undefined;
    });
    builder.addCase(fetchArticleById.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
      state.error = undefined;
    });
    builder.addCase(fetchArticleById.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  }
});

export const {
  reducer: articleReducer
} = articleSlice;
