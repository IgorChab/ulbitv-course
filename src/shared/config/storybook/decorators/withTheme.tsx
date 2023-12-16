import { type Decorator } from '@storybook/react';
import React from 'react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import ThemeProvider from 'app/providers/ThemeProvider/ui/ThemeProvider';
import 'app/styles/index.scss';

export const withTheme: Decorator = (
  Story,
  context
) => {
  const theme = context.parameters.theme || context.globals.theme;
  const storyTheme = theme === 'dark' ? Theme.DARK : Theme.LIGHT;

  return (
    <ThemeProvider themeForStorybook={storyTheme}>
      <div className={`app ${storyTheme}`}>
        <Story />
      </div>
    </ThemeProvider>
  );
};
