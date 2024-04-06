import type { Meta, StoryObj } from '@storybook/react';

import { ArticleDetails } from './ArticleDetails';

const meta = {
  title: 'entities/ArticleDetails',
  component: ArticleDetails,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs']
} satisfies Meta<typeof ArticleDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
