import type { Preview } from '@storybook/react';
import { withTheme } from 'shared/config/storybook/decorators/withTheme';
import { withBrowserRouter } from 'shared/config/storybook/decorators/withBrowserRouter';
import { withI18next } from 'shared/config/storybook/decorators/withI18next';
import { withStoreProvider } from 'shared/config/storybook/decorators/withStoreProvider';

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      // The icon for the toolbar item
      icon: 'circlehollow',
      // Array of options
      items: [
        { value: 'light', icon: 'circlehollow', title: 'light' },
        { value: 'dark', icon: 'circle', title: 'dark' }
      ],
      // Property that specifies if the name of the item will be displayed
      showName: true
    }
  },
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en', right: '🇺🇸', title: 'English' },
        { value: 'ru', right: '🇷🇺', title: 'Russian' }
      ],
      showName: true
    }
  }
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [withBrowserRouter, withI18next, withTheme, withStoreProvider()]
};

export default preview;
