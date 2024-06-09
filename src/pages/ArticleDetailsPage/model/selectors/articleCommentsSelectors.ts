import { type StateSchema } from 'app/providers/StoreProvider';

const isLoading = (state: StateSchema) => state.articleDetailsPage?.comments?.isLoading;
const commentsError = (state: StateSchema) => state.articleDetailsPage?.comments?.error;

export const articleCommentsSelectors = {
  isLoading,
  commentsError
};
