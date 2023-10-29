import React, {FC, useState} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import styles from './LangSwitcher.module.scss';
import i18n from "shared/config/i18n/i18n";
import {Button} from "shared/ui/Button/Button";

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher: FC<LangSwitcherProps> = ({className}) => {
    const [lng, setLng] = useState(i18n.language);

    const switchLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
        setLng(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames(styles.langSwitcher, {}, [className])}
            onClick={switchLanguage}
            variant="clear"
        >
            {lng === 'ru' ? 'EN' : 'RU'}
        </Button>
    );
};
