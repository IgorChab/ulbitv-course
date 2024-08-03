import type { Meta, StoryObj } from '@storybook/react';
import { Country } from 'entities/CountryListBox';

import { CountryListBox } from './CountryListBox';

const meta = {
  title: 'entities/CountryListBox',
  component: CountryListBox,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs']
} satisfies Meta<typeof CountryListBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: Country.USA
  }
};
