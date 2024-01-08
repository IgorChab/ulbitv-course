import React, { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import i18n from 'shared/config/i18n/i18n';
import { Button } from 'shared/ui/Button/Button';

import styles from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
  const switchLanguage = () => {
    void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      className={classNames(styles.langSwitcher, {}, [className])}
      onClick={switchLanguage}
      variant="clear"
        >
      {i18n.language === 'ru' ? 'EN' : 'RU'}
    </Button>
  );
};
