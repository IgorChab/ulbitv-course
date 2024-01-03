import type { Meta, StoryObj } from '@storybook/react';

import { ArrowIcon } from './ArrowIcon';

const meta = {
  title: 'shared/ArrowIcon',
  component: ArrowIcon,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs']
} satisfies Meta<typeof ArrowIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
