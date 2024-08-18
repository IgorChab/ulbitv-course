import {
  configureStore,
  type EnhancedStore,
  type Reducer,
  type ReducersMapObject
} from '@reduxjs/toolkit';
import { axiosClient } from 'shared/api/axiosClient';
import { rtkClient } from 'shared/api/rtkClient';

import { createReducerManager } from './reducerManager';
import { type StateSchema } from './StateSchema';

export interface StoreWithReducerManager extends EnhancedStore<StateSchema> {
  reducerManager: ReturnType<typeof createReducerManager>
}

export const createReduxStore = (
  initialState?: StateSchema,
  initialReducers?: ReducersMapObject<StateSchema>
) => {
  const reducerManager = createReducerManager(initialReducers);

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<StateSchema>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api: axiosClient
        }
      }
    }).concat(rtkClient.middleware)
  }) as StoreWithReducerManager;

  store.reducerManager = reducerManager;

  return store;
};
