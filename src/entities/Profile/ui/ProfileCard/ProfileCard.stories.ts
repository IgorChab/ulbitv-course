import type { Meta, StoryObj } from '@storybook/react';
import { withStoreProvider } from 'shared/config/storybook/decorators/withStoreProvider';
import { profileMock } from 'shared/constants/__mocks__/profile';

import { ProfileCard } from './ProfileCard';

const meta = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs']
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MyProfile: Story = {
  decorators: [
    withStoreProvider({
      user: {
        authData: { id: '1' }
      },
      profile: {
        data: profileMock
      }
    })
  ]
};
export const OtherProfile: Story = {
  decorators: [
    withStoreProvider({
      user: {
        authData: { id: '2' }
      },
      profile: {
        data: profileMock
      }
    })
  ]
};

export const LoadingProfile: Story = {
  decorators: [
    withStoreProvider({
      profile: {
        isLoading: true
      }
    })
  ]
};

export const ErrorProfile: Story = {
  decorators: [
    withStoreProvider({
      profile: {
        error: 'error'
      }
    })
  ]
};
