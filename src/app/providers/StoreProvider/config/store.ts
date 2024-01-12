import { configureStore, type EnhancedStore, type ReducersMapObject } from '@reduxjs/toolkit';

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

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState
  }) as StoreWithReducerManager;

  store.reducerManager = reducerManager;

  return store;
};
