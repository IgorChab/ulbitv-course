import { type Decorator } from '@storybook/react';
import React, { useEffect } from 'react';
import { ThemeProvider } from 'app/providers/ThemeProvider/ui/ThemeProvider';

import 'app/styles/index.scss';

export const withTheme: Decorator = (
  Story,
  context
) => {
  const theme = context.parameters.theme || context.globals.theme;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    document.body.className = `${theme}Theme`;
  }, [theme]);

  return (
    <ThemeProvider themeForStorybook={theme}>
      <Story />
    </ThemeProvider>
  );
};
