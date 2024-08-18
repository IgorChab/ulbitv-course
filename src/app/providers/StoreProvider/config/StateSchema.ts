import { type CounterSchema } from 'entities/Counter';
import { type UserSchema } from 'entities/User';
import { type LoginSchema } from 'features/AuthByUsername';
import { type ProfileSchema } from 'entities/Profile';
import { type AxiosInstance } from 'axios';
import { type ArticleSchema } from 'entities/Article';
import { type ArticleDetailsPageSchema } from 'pages/ArticleDetailsPage';
import { type ArticlesSchema } from 'pages/ActiclesPage';
import { type UISchema } from 'features/UI';
import { type ArticlesFiltersSchema } from 'features/ArticlesFilters';
import { type rtkClient } from 'shared/api/rtkClient';

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema
  ui: UISchema
  [rtkClient.reducerPath]: ReturnType<typeof rtkClient.reducer>

  // Async reducers
  login?: LoginSchema
  profile?: ProfileSchema
  article?: ArticleSchema
  articles?: ArticlesSchema
  articlesFilters?: ArticlesFiltersSchema
  articleDetailsPage?: ArticleDetailsPageSchema
}

export type ReducerNames = keyof StateSchema;

export interface ThunkExtra {
  api: AxiosInstance
}
