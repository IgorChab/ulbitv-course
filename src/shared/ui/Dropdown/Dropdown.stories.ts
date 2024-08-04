import type { Meta, StoryObj } from '@storybook/react';

import { Dropdown } from './Dropdown';

const meta = {
  title: 'shared/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    triggerSlot: 'Open Dropdown',
    items: [
      {
        text: 'value1'
      },
      {
        text: 'value2'
      },
      {
        text: 'value3'
      }
    ]
  }
};

export const LinkItems: Story = {
  args: {
    triggerSlot: 'Open Dropdown',
    items: [
      {
        text: 'profile',
        href: '/profile'
      },
      {
        text: 'settings',
        href: '/settings'
      },
      {
        text: 'logout',
        href: '/logout'
      }
    ]
  }
};
