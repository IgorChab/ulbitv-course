import type { Meta, StoryObj } from '@storybook/react';

import { ListBox } from './ListBox';

const meta = {
  title: 'shared/ListBox',
  component: ListBox,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs']
} satisfies Meta<typeof ListBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 'value1',
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

export const Disabled: Story = {
  args: {
    value: 'value1',
    disabled: true,
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
