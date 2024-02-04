import { type FC, useEffect } from 'react';
import type React from 'react';
import { useStore } from 'react-redux';
import { type Reducer } from '@reduxjs/toolkit';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { type ReducerNames, type StoreWithReducerManager } from 'app/providers/StoreProvider';

type ReducersMap = {
  [key in ReducerNames]?: Reducer
};

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
    reducersList.forEach(([name, reducer]) => {
      store.reducerManager.add(name as ReducerNames, reducer);
      dispatch({ type: `@INIT ${name} reducer` });
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
