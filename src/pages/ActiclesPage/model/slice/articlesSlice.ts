import { createEntityAdapter, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type Article } from 'entities/Article';
import { type StateSchema } from 'app/providers/StoreProvider';
import { LocalStorageKeys } from 'shared/constants/LocalStorageKeys';

import { type ArticlesSchema, type ArticlesView } from '../types/articlesSchema';
import { fetchArticlesList } from '../services/fetchArticlesList';

const articlesAdapter = createEntityAdapter<Article, string>({
  selectId: (article) => article.id
});

const articlesSlice = createSlice({
  name: 'articles',
  initialState: articlesAdapter.getInitialState<ArticlesSchema>({
    error: undefined,
    isLoading: false,
    view: 'cell',
    ids: [],
    entities: {}
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticlesView>) => {
      state.view = action.payload;
    },
    setInitialView: (state) => {
      const initialView = localStorage
        .getItem(LocalStorageKeys.ARTICLES_VIEW) as ArticlesView | null;

      if (initialView) {
        state.view = initialView;
      }
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchArticlesList.pending, (state, action) => {
      state.isLoading = true;
      state.error = undefined;
    });
    builder.addCase(fetchArticlesList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = undefined;
      articlesAdapter.setAll(state, action.payload);
    });
    builder.addCase(fetchArticlesList.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  }
});

export const articlesAdapterSelectors = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articles || articlesAdapter.getInitialState()
);

export const {
  actions: articlesActions,
  reducer: articlesReducer
} = articlesSlice;
