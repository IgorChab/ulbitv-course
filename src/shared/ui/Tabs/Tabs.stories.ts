import type { Meta, StoryObj } from '@storybook/react';
import { ArticleType } from 'entities/Article';

import { Tabs } from './Tabs';

const meta = {
  title: 'shared/Tabs',
  component: Tabs,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tabs: [
      {
        value: ArticleType.ALL,
        content: ArticleType.ALL
      },
      {
        value: ArticleType.IT,
        content: ArticleType.IT
      },
      {
        value: ArticleType.JS,
        content: ArticleType.JS
      }
    ],
    value: ArticleType.IT
  }
};
