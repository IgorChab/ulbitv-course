import React, { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import ThemeIcon from 'shared/assets/icons/icon_theme.svg';
import { Button } from 'shared/ui/Button/Button';

import styles from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = React.memo(({ className }) => {
  const { toggleTheme } = useTheme();

  return (
    <Button
      className={classNames('', {}, [className])}
      onClick={toggleTheme}
      variant="clear"
    >
      <ThemeIcon className={styles.themeIcon} />
    </Button>
  );
});
