import React from 'react';
import { type Decorator } from '@storybook/react';
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { type DeepPartial } from 'shared/types/DeepPartial';

export const withStoreProvider = (initialState?: DeepPartial<StateSchema>): Decorator => (
  Story
) => (
  <StoreProvider initialState={initialState}>
    <Story />
  </StoreProvider>
);
