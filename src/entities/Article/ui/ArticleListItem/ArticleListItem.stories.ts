import type { Meta, StoryObj } from '@storybook/react';
import { articleMock } from 'shared/constants/__mocks__/article';

import { ArticleListItem } from './ArticleListItem';

const meta = {
  title: 'entities/ArticleListItem',
  component: ArticleListItem,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs']
} satisfies Meta<typeof ArticleListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    article: articleMock
  }
};
