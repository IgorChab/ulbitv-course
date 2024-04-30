import type { Meta, StoryObj } from '@storybook/react';
import { articleMock } from 'shared/constants/__mocks__/article';

import { ArticleCellItem } from './ArticleCellItem';

const meta = {
  title: 'entities/ArticleCellItem',
  component: ArticleCellItem,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs']
} satisfies Meta<typeof ArticleCellItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    article: articleMock
  }
};
