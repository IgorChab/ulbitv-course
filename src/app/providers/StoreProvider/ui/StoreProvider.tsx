import React, { type FC } from 'react';
import { Provider } from 'react-redux';
import { type DeepPartial } from 'shared/types/DeepPartial';
import { type StateSchema } from 'app/providers/StoreProvider';

import { createReduxStore } from '../config/store';

interface StoreProviderProps {
  children: React.ReactNode
  initialState?: DeepPartial<StateSchema>
}

export const StoreProvider: FC<StoreProviderProps> = ({ children, initialState }) => {
  const store = createReduxStore(initialState as StateSchema);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
