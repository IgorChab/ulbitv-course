import type { Meta, StoryObj } from '@storybook/react';

import { ArticlesFilters } from './ArticlesFilters';

const meta = {
  title: 'features/ArticlesFilters',
  component: ArticlesFilters,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs']
} satisfies Meta<typeof ArticlesFilters>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
