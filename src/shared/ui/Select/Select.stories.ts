import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './Select';

const meta = {
  title: 'shared/Select',
  component: Select,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: [
      {
        value: 'value1',
        content: 'value1'
      },
      {
        value: 'value2',
        content: 'value2'
      },
      {
        value: 'value3',
        content: 'value3'
      }
    ]
  }
};
