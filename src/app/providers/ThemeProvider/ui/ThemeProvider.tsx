import React, { type FC, type PropsWithChildren, useMemo, useState } from 'react';
import { LocalStorageKeys } from 'shared/constants/LocalStorageKeys';

import { Theme, ThemeContext } from '../lib/ThemeContext';

const defaultTheme = localStorage.getItem(LocalStorageKeys.THEME) as Theme || Theme.LIGHT;

export const ThemeProvider: FC<PropsWithChildren<{ themeForStorybook?: Theme }>> = ({
  children,
  themeForStorybook
}) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultProps = useMemo(() => ({
    theme: themeForStorybook || theme,
    setTheme
  }), [theme, themeForStorybook]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
