import { type StateSchema } from 'app/providers/StoreProvider';

const isLoading = (state: StateSchema) => state.articles?.isLoading;
const getArticlesError = (state: StateSchema) => state.articles?.error;
const getArticlesView = (state: StateSchema) => state.articles?.view || 'cell';

export const articlesSelectors = {
  isLoading,
  getArticlesError,
  getArticlesView
};
