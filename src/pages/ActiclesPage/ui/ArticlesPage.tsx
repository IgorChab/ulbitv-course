import React, { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

import styles from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string
}

const ArticlesPage: FC<ArticlesPageProps> = ({ className }) => {
  const { t } = useTranslation('articles');

  return (
    <div className={classNames(styles.articlesPage, {}, [className])}>
      {t('articlesPage')}
    </div>
  );
};

export default ArticlesPage;
