import { useContext } from 'react';
import { LocalStorageKeys } from 'shared/constants/LocalStorageKeys';

import { Theme, ThemeContext } from './ThemeContext';

interface UseThemeResult {
  theme: Theme
  toggleTheme: () => void
}

const switchTheme = (theme: Theme) => {
  switch (theme) {
    case Theme.LIGHT:
      return Theme.DARK;
    case Theme.DARK:
      return Theme.BLACK_AND_WHITE;
    case Theme.BLACK_AND_WHITE:
      return Theme.LIGHT;
    default:
      return Theme.LIGHT;
  }
};

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = switchTheme(theme);
    setTheme(newTheme);
    localStorage.setItem(LocalStorageKeys.THEME, newTheme);
  };

  return {
    theme,
    toggleTheme
  };
};
