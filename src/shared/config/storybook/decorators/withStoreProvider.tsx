import React from 'react';
import { type Decorator } from '@storybook/react';
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { type DeepPartial } from 'shared/types/DeepPartial';
import { type ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/AuthByUsername';

const defaultReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  login: loginReducer
};

export const withStoreProvider = (
  initialState?: DeepPartial<StateSchema>,
  initialReducers?: DeepPartial<ReducersMapObject<StateSchema>>
): Decorator => (
  Story
) => (
  <StoreProvider
    initialState={initialState}
    initialReducers={{ ...defaultReducers, ...initialReducers }}
  >
    <Story />
  </StoreProvider>
);
