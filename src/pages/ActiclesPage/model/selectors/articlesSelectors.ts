import { type StateSchema } from 'app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';

import { getInitialView } from '../slice/articlesSlice';

const isLoading = (state: StateSchema) => state.articles?.isLoading;
const getArticlesError = (state: StateSchema) => state.articles?.error;
const getArticlesView = (state: StateSchema) => state.articles?.view || getInitialView();
const getArticlePage = (state: StateSchema) => state.articles?.page || 1;
const getHasMore = (state: StateSchema) => state.articles?.hasMore;
const getArticlePageLimit = createSelector(getArticlesView, (view) => (
  view === 'cell' ? 9 : 3
));

export const articlesSelectors = {
  isLoading,
  getArticlesError,
  getArticlesView,
  getArticlePage,
  getArticlePageLimit,
  getHasMore
};
