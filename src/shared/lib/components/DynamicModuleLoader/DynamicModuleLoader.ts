import { type FC, useEffect } from 'react';
import type React from 'react';
import { useStore } from 'react-redux';
import { type Reducer } from '@reduxjs/toolkit';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import {
  type ReducerNames,
  type StateSchema,
  type StoreWithReducerManager
} from 'app/providers/StoreProvider';

export type ReducersMap = {
  [key in ReducerNames]?: Reducer<NonNullable<StateSchema[key]>>
};

interface DynamicModuleLoaderProps {
  children: React.ReactNode
  reducers: ReducersMap
  removeAfterUnmount?: boolean
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = ({
  children,
  reducers,
  removeAfterUnmount = true
}) => {
  const store = useStore() as StoreWithReducerManager;

  const dispatch = useAppDispatch();

  const reducersList = Object.entries(reducers);

  useEffect(() => {
    reducersList.forEach(([name, reducer]) => {
      const reducerName = name as ReducerNames;

      const isReducerInited = store.reducerManager.isReducerInited(reducerName);

      if (!isReducerInited) {
        store.reducerManager.add(reducerName, reducer);
        dispatch({ type: `@INIT ${reducerName} reducer` });
      }
    });

    return () => {
      if (removeAfterUnmount) {
        reducersList.forEach(([name]) => {
          store.reducerManager.remove(name as ReducerNames);
          dispatch({ type: `@DESTROY ${name} reducer` });
        });
      }
    };
  }, []);

  return children;
};
