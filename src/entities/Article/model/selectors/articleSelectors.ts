import { type StateSchema } from 'app/providers/StoreProvider';

const getArticle = (state: StateSchema) => state.article?.data;
const getIsLoading = (state: StateSchema) => state.article?.isLoading;
const getArticleError = (state: StateSchema) => state.article?.error;

export const articleSelectors = {
  getArticle,
  getIsLoading,
  getArticleError
};
