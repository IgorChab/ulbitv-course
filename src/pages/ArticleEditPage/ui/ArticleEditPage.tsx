import React, { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import styles from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
  className?: string
}

const ArticleEditPage: FC<ArticleEditPageProps> = ({ className }) => {
  const { id } = useParams<{ id: string }>();
  const isEditPage = Boolean(id);
  const { t } = useTranslation('editArticle');

  return (
    <div className={classNames(styles.articleEditPage, {}, [className])}>
      {isEditPage ? t('editArticlePage') : t('createArticlePage')}
    </div>
  );
};

export default ArticleEditPage;
