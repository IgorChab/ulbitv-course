import { type CounterSchema } from 'entities/Counter';
import { type UserSchema } from 'entities/User';
import { type LoginSchema } from 'features/AuthByUsername';
import { type ProfileSchema } from 'entities/Profile';
import { type AxiosInstance } from 'axios';

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema

  // Async reducers
  login?: LoginSchema
  profile?: ProfileSchema
}

export type ReducerNames = keyof StateSchema;

export interface ThunkExtra {
  api: AxiosInstance
}
