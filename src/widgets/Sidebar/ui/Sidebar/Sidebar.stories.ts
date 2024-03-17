import type { Meta, StoryObj } from '@storybook/react';
import { withStoreProvider } from 'shared/config/storybook/decorators/withStoreProvider';

import { Sidebar } from './Sidebar';

const meta = {
  title: 'widget/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithAuthUser: Story = {
  decorators: [
    withStoreProvider({
      user: { authData: { id: '1' } }
    })
  ]
};
