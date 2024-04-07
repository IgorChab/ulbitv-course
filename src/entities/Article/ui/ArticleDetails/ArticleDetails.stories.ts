import type { Meta, StoryObj } from '@storybook/react';
import { withStoreProvider } from 'shared/config/storybook/decorators/withStoreProvider';
import { articleMock } from 'shared/constants/__mocks__/article';

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

export const Default: Story = {
  decorators: [withStoreProvider({
    article: {
      data: articleMock
    }
  })]
};

export const WithError: Story = {
  decorators: [withStoreProvider({
    article: {
      error: 'error'
    }
  })]
};

export const WithLoading: Story = {
  decorators: [withStoreProvider({
    article: {
      isLoading: true
    }
  })]
};
