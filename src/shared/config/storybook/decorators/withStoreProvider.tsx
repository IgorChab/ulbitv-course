import React from 'react';
import { type Decorator } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';

export const withStoreProvider: Decorator = (Story) => (
  <StoreProvider>
    <Story />
  </StoreProvider>
);
