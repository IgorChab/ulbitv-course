import React, { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

import styles from './PageError.module.scss';

interface PageErrorProps {
  className?: string
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    location.reload();
  };

  return (
    <div className={classNames(styles.pageError, {}, [className])}>
      <div className={styles.wrapper}>
        <h1>{t('somethingWentWrong')}</h1>
        <Button
          variant='clear'
          className={styles.reloadButton}
          onClick={reloadPage}
        >
          {t('reloadPage')}
        </Button>
      </div>
    </div>
  );
};
