import React, {FC} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import styles from './ThemeSwitcher.module.scss';
import {useTheme} from "app/providers/ThemeProvider";
import ThemeIcon from 'shared/assets/icons/icon_theme.svg';
import {Button} from "shared/ui/Button/Button";
interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({className}) => {
    const {theme, toggleTheme} = useTheme();

    return (
        <Button
            className={classNames(styles.themeSwitcher, {}, [className])}
            onClick={toggleTheme}
            variant="clear"
        >
            <ThemeIcon
                fill={theme === 'dark' ? 'black' : 'white'}
            />
        </Button>
    );
};
