import React, {FC} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import styles from './Navbar.module.scss';
import {AppLink} from "shared/ui/AppLink/AppLink";
import {useTranslation} from "react-i18next";

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = ({className}) => {
    const {t} = useTranslation();

    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <div className={styles.links}>
                <AppLink to={'/'} variant={"secondary"}>{t('mainPage')}</AppLink>
                <AppLink to={'/about'}>{t('aboutPage')}</AppLink>
            </div>
        </div>
    );
};
