import { type ArticleType } from 'entities/Article';

export type SortFields = 'title' | 'views' | 'createdAt';
export type Order = 'asc' | 'desc';

export interface ArticlesFiltersSchema {
  search: string
  sort: SortFields
  order: Order
  type: ArticleType
}
