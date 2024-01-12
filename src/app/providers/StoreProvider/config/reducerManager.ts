import {
  combineReducers,
  type Reducer,
  type ReducersMapObject,
  type UnknownAction
} from '@reduxjs/toolkit';
import { type StateSchema } from 'app/providers/StoreProvider';
import { type StateFromReducersMapObject } from 'redux';

import { type ReducerNames } from './StateSchema';
import { rootReducer } from './reducer';

export function createReducerManager (initialReducers?: ReducersMapObject<StateSchema>) {
  const reducers = { ...rootReducer, ...initialReducers };

  let combinedReducer = combineReducers(reducers);

  let keysToRemove: ReducerNames[] = [];

  return {
    getReducerMap: () => reducers,

    reduce: (
      state: StateFromReducersMapObject<ReducersMapObject<StateSchema>>,
      action: UnknownAction
    ) => {
      if (keysToRemove.length > 0) {
        state = { ...state };
        for (const key of keysToRemove) {
          // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
          delete state[key];
        }
        keysToRemove = [];
      }

      return combinedReducer(state, action);
    },

    add: (key: ReducerNames, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return;
      }

      reducers[key] = reducer;
      combinedReducer = combineReducers(reducers);
    },

    remove: (key: ReducerNames) => {
      if (!key || !reducers[key]) {
        return;
      }

      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete reducers[key];

      keysToRemove.push(key);
      combinedReducer = combineReducers(reducers);
    }
  };
}
