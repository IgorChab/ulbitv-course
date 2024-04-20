import { type StateSchema } from 'app/providers/StoreProvider';

const isLoading = (state: StateSchema) => state.articleComments?.isLoading;
const commentsError = (state: StateSchema) => state.articleComments?.error;

export const articleCommentsSelectors = {
  isLoading,
  commentsError
};
