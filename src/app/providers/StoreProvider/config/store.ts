import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from './reducer';
import { type StateSchema } from './StateSchema';

export const createReduxStore = (initialState?: StateSchema) => {
  return configureStore<StateSchema>({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initialState
  });
};

export const store = createReduxStore();

export type AppDispatch = typeof store.dispatch;
