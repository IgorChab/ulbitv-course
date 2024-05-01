import { type CounterSchema } from 'entities/Counter';
import { type UserSchema } from 'entities/User';
import { type LoginSchema } from 'features/AuthByUsername';
import { type ProfileSchema } from 'entities/Profile';
import { type AxiosInstance } from 'axios';
import { type ArticleSchema } from 'entities/Article';
import { type ArticleCommentsSchema } from 'pages/ArticleDetailsPage';
import { type ArticlesSchema } from 'pages/ActiclesPage';

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema

  // Async reducers
  login?: LoginSchema
  profile?: ProfileSchema
  article?: ArticleSchema
  articleComments?: ArticleCommentsSchema
  articles?: ArticlesSchema
}

export type ReducerNames = keyof StateSchema;

export interface ThunkExtra {
  api: AxiosInstance
}
