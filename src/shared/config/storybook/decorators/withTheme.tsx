import { type Decorator } from '@storybook/react';
import React from 'react';
import ThemeProvider from 'app/providers/ThemeProvider/ui/ThemeProvider';

import 'app/styles/index.scss';

export const withTheme: Decorator = (
  Story,
  context
) => {
  const theme = context.parameters.theme || context.globals.theme;

  return (
    <ThemeProvider themeForStorybook={theme}>
      <div className={`app ${theme}`}>
        <Story />
      </div>
    </ThemeProvider>
  );
};
