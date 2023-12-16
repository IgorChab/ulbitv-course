import type { Meta, StoryObj } from '@storybook/react';

import { AppLink } from './AppLink';

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  parameters: {
    layout: 'center'
  },
  args: {
    to: '/'
  },
  tags: ['autodocs']
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'AppLink',
    variant: 'primary'
  }
};
export const Secondary: Story = {
  args: {
    children: 'AppLink',
    variant: 'secondary'
  }
};
