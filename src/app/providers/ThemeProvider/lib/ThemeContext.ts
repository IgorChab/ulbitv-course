import type React from 'react';
import { createContext } from 'react';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

interface ThemeContextProps {
  theme: Theme
  setTheme: React.Dispatch<React.SetStateAction<Theme>>
}

export const ThemeContext = createContext<ThemeContextProps>({
  setTheme (value: ((prevState: Theme) => Theme) | Theme): void {},
  theme: Theme.LIGHT
});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
