import type { Meta, StoryObj } from '@storybook/react';

import { ArticlesViewSwitcher } from './ArticlesViewSwitcher';

const meta = {
  title: 'features/ArticlesViewSwitcher',
  component: ArticlesViewSwitcher,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs']
} satisfies Meta<typeof ArticlesViewSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    view: 'cell'
  }
};
