import { useContext } from 'react';
import { LocalStorageKeys } from 'shared/constants/LocalStorageKeys';

import { Theme, ThemeContext } from './ThemeContext';

interface UseThemeResult {
  theme: Theme
  toggleTheme: () => void
}

const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme(newTheme);
    localStorage.setItem(LocalStorageKeys.THEME, newTheme);
  };

  return {
    theme,
    toggleTheme
  };
};

export default useTheme;
