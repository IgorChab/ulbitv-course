import React, { type FC } from 'react';
import { Provider } from 'react-redux';
import { type DeepPartial } from 'shared/types/DeepPartial';
import { type StateSchema } from 'app/providers/StoreProvider';
import { type ReducersMapObject } from '@reduxjs/toolkit';

import { createReduxStore } from '../config/store';

interface StoreProviderProps {
  children: React.ReactNode
  initialState?: DeepPartial<StateSchema>
  initialReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider: FC<StoreProviderProps> = ({
  children,
  initialState,
  initialReducers
}) => {
  const store = createReduxStore(
    initialState as StateSchema,
    initialReducers as ReducersMapObject<StateSchema>
  );

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
