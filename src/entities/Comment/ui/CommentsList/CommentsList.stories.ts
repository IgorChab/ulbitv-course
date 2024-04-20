import type { Meta, StoryObj } from '@storybook/react';
import { commentMock } from 'shared/constants/__mocks__/comment';

import { CommentsList } from './CommentsList';

const meta = {
  title: 'entities/CommentsList',
  component: CommentsList,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs']
} satisfies Meta<typeof CommentsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    comments: [commentMock, { ...commentMock, id: '2', text: 'some text' }]
  }
};

export const WithNoComments: Story = {};

export const WithLoading: Story = {
  args: {
    isLoading: true
  }
};
