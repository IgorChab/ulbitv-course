import type { Meta, StoryObj } from '@storybook/react';
import { withStoreProvider } from 'shared/config/storybook/decorators/withStoreProvider';

import LoginModal from './LoginModal';

const meta = {
  title: 'features/LoginModal',
  component: LoginModal,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs']
} satisfies Meta<typeof LoginModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithError: Story = {
  decorators: [
    withStoreProvider({
      login: {
        isError: true
      }
    })
  ]
};

export const WithLoading: Story = {
  decorators: [
    withStoreProvider({
      login: {
        isLoading: true
      }
    })
  ]
};
