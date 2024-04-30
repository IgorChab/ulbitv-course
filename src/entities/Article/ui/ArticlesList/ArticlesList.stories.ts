import type { Meta, StoryObj } from '@storybook/react';

import { ArticlesList } from './ArticlesList';

const meta = {
  title: 'entities/ArticlesList',
  component: ArticlesList,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs']
} satisfies Meta<typeof ArticlesList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CellArticlesView: Story = {
  args: {
    articles: [], // TODO: прокидывать через стор декоратор
    view: 'cell'
  }
};

export const CellArticlesViewWithLoading: Story = {
  args: {
    articles: [], // TODO: прокидывать через стор декоратор
    view: 'cell',
    isLoading: true
  }
};

export const ListArticlesView: Story = {
  args: {
    articles: [], // TODO: прокидывать через стор декоратор
    view: 'list'
  }
};

export const ListArticlesViewWithLoading: Story = {
  args: {
    articles: [], // TODO: прокидывать через стор декоратор
    view: 'list',
    isLoading: true
  }
};
