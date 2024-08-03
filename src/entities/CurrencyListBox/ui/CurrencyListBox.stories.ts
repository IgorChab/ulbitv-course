import type { Meta, StoryObj } from '@storybook/react';
import { Currency } from 'entities/CurrencyListBox';

import { CurrencyListBox } from './CurrencyListBox';

const meta = {
  title: 'entities/CurrencyListBox',
  component: CurrencyListBox,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs']
} satisfies Meta<typeof CurrencyListBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: Currency.EUR
  }
};
