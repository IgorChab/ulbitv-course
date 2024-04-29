import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { type Comment } from 'entities/Comment';
import { type StateSchema } from 'app/providers/StoreProvider';

import { type ArticleCommentsSchema } from '../types/ArticleCommentsSchema';
import {
  fetchCommentsByArticleId
} from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';

const commentsAdapter = createEntityAdapter<Comment, string>({
  selectId: (book: Comment) => book.id
});

const articleCommentsSlice = createSlice({
  name: 'articleComments',
  initialState: commentsAdapter.getInitialState<ArticleCommentsSchema>({
    error: undefined,
    isLoading: false,
    ids: [],
    entities: {}
  }),
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchCommentsByArticleId.pending, (state, action) => {
      state.isLoading = true;
      state.error = undefined;
    });
    builder.addCase(fetchCommentsByArticleId.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = undefined;
      commentsAdapter.setAll(state, action.payload);
    });
    builder.addCase(fetchCommentsByArticleId.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  }
});

export const commentsAdapterSelectors = commentsAdapter.getSelectors<StateSchema>(
  (state) => state.articleComments || commentsAdapter.getInitialState()
);

export const {
  reducer: articleCommentsReducer
} = articleCommentsSlice;
