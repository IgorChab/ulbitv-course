import type { Meta, StoryObj } from '@storybook/react';

import { Card } from './Card';

const meta = {
  title: 'shared/Card',
  component: Card,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adip'
  }
};

export const Outlined: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adip',
    variant: 'outlined'
  }
};
