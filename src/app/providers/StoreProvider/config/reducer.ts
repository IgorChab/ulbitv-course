import type { ReducersMapObject } from '@reduxjs/toolkit';
import type { StateSchema } from 'app/providers/StoreProvider';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { uiReducer } from 'features/UI';
import { rtkClient } from 'shared/api/rtkClient';

export const rootReducer: ReducersMapObject<StateSchema> = {
  counter: counterReducer,
  user: userReducer,
  ui: uiReducer,
  [rtkClient.reducerPath]: rtkClient.reducer
};
