import React, { type FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import i18n from 'shared/config/i18n/i18n';
import { Button } from 'shared/ui/Button/Button';

import styles from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher: FC<LangSwitcherProps> = React.memo(({ className }) => {
  const [language, setLanguage] = useState(i18n.language);

  const switchLanguage = () => {
    void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    setLanguage((language) => language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      className={classNames(styles.langSwitcher, {}, [className])}
      onClick={switchLanguage}
      variant="clear"
        >
      {language === 'ru' ? 'EN' : 'RU'}
    </Button>
  );
});
