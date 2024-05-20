import { type StateSchema } from 'app/providers/StoreProvider';
import { ArticleType } from 'entities/Article';

export const getSearch = (state: StateSchema) => state.articlesFilters?.search || '';
export const getSort = (state: StateSchema) => state.articlesFilters?.sort || 'createdAt';
export const getOrder = (state: StateSchema) => state.articlesFilters?.order || 'asc';
export const getType = (state: StateSchema) => state.articlesFilters?.type || ArticleType.ALL;

export const articlesFiltersSelectors = {
  getSearch,
  getSort,
  getOrder,
  getType
};
