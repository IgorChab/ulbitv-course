import type { Meta, StoryObj } from '@storybook/react';

import { ArticleDetailsSkeleton } from './ArticleDetailsSkeleton';

const meta = {
  title: 'entities/ArticleDetailsSkeleton',
  component: ArticleDetailsSkeleton,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs']
} satisfies Meta<typeof ArticleDetailsSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
