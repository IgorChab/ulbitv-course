import React, { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

import styles from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className }) => {
  const { t } = useTranslation('articleDetails');

  return (
    <div className={classNames(styles.articleDetailsPage, {}, [className])}>
      {t('articleDetailsPage')}
    </div>
  );
};

export default ArticleDetailsPage;
