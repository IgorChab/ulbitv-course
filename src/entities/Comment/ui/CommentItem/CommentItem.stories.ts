import type { Meta, StoryObj } from '@storybook/react';
import { commentMock } from 'shared/constants/__mocks__/comment';

import { CommentItem } from './CommentItem';

const meta = {
  title: 'entities/CommentItem',
  component: CommentItem,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs']
} satisfies Meta<typeof CommentItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    comment: commentMock
  }
};
