import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from './Typography';

const meta = {
  title: 'shared/Typography',
  component: Typography,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Title: Story = {
  args: {
    children: 'Typography',
    variant: 'title'
  }
};

export const Subtitle: Story = {
  args: {
    children: 'Typography',
    variant: 'subtitle'
  }
};

export const Small: Story = {
  args: {
    children: 'Typography',
    variant: 'small'
  }
};
