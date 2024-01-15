import { type FC, useEffect } from 'react';
import type React from 'react';
import { useStore } from 'react-redux';
import { type StoreWithReducerManager } from 'app/providers/StoreProvider/config/store';
import { type ReducerNames } from 'app/providers/StoreProvider/config/StateSchema';
import { type Reducer } from '@reduxjs/toolkit';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

type ReducersMap = {
  [key in ReducerNames]?: Reducer
};

type ReducersListEntries = [ReducerNames, Reducer];

interface DynamicModuleLoaderProps {
  children: React.ReactNode
  reducers: ReducersMap
  removeAfterUnmount?: boolean
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = ({
  children,
  reducers,
  removeAfterUnmount
}) => {
  const store = useStore() as StoreWithReducerManager;

  const dispatch = useAppDispatch();

  const reducersList = Object.entries(reducers);

  useEffect(() => {
    reducersList.forEach(([name, reducer]: ReducersListEntries) => {
      store.reducerManager.add(name, reducer);
      dispatch({ type: `@INIT ${name} reducer` });
    });
    return () => {
      if (removeAfterUnmount) {
        reducersList.forEach(([name, reducer]: ReducersListEntries) => {
          store.reducerManager.remove(name);
          dispatch({ type: `@DESTROY ${name} reducer` });
        });
      }
    };
  }, []);

  return children;
};
