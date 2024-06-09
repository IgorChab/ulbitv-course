import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { type StateSchema } from 'app/providers/StoreProvider';
import { type Article } from 'entities/Article';

import { type ArticleRecommendationsSchema } from '../types/ArticleRecommendationsSchema';
import {
  fetchArticleRecommendations
} from '../services/fetchArticleRecommendations/fetchArticleRecommendations';

const recommendationsAdapter = createEntityAdapter<Article, string>({
  selectId: (article: Article) => article.id
});

const articleRecommendationsSlice = createSlice({
  name: 'articleRecommendations',
  initialState: recommendationsAdapter.getInitialState<ArticleRecommendationsSchema>({
    error: undefined,
    isLoading: false,
    ids: [],
    entities: {}
  }),
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchArticleRecommendations.pending, (state, action) => {
      state.isLoading = true;
      state.error = undefined;
    });
    builder.addCase(fetchArticleRecommendations.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = undefined;
      recommendationsAdapter.setAll(state, action.payload);
    });
    builder.addCase(fetchArticleRecommendations.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  }
});

export const recommendationsSelectors = recommendationsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsPage?.recommendations || recommendationsAdapter.getInitialState()
);

export const {
  reducer: articleRecommendationsReducer
} = articleRecommendationsSlice;
