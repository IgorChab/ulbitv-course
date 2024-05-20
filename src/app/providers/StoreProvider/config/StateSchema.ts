import { type CounterSchema } from 'entities/Counter';
import { type UserSchema } from 'entities/User';
import { type LoginSchema } from 'features/AuthByUsername';
import { type ProfileSchema } from 'entities/Profile';
import { type AxiosInstance } from 'axios';
import { type ArticleSchema } from 'entities/Article';
import { type ArticleCommentsSchema } from 'pages/ArticleDetailsPage';
import { type ArticlesSchema } from 'pages/ActiclesPage';
import { type UISchema } from 'features/UI';
import { type ArticlesFiltersSchema } from 'features/ArticlesFilters';

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema
  ui: UISchema

  // Async reducers
  login?: LoginSchema
  profile?: ProfileSchema
  article?: ArticleSchema
  articleComments?: ArticleCommentsSchema
  articles?: ArticlesSchema
  articlesFilters?: ArticlesFiltersSchema
}

export type ReducerNames = keyof StateSchema;

export interface ThunkExtra {
  api: AxiosInstance
}
