import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta = {
  title: 'shared/Button',
  component: Button,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Label'
  }
};
export const Clear: Story = {
  args: {
    variant: 'clear',
    children: 'Label'
  }
};
export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Label'
  }
};

export const Disabled: Story = {
  args: {
    variant: 'outline',
    children: 'Label',
    disabled: true
  }
};
