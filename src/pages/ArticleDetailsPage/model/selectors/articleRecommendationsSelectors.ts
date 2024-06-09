import { type StateSchema } from 'app/providers/StoreProvider';

const isLoading = (state: StateSchema) => state.articleDetailsPage?.recommendations?.isLoading;
const error = (state: StateSchema) => state.articleDetailsPage?.recommendations?.error;

export const articleRecommendationsSelectors = {
  isLoading,
  error
};
