import React, { type FC, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ArticleDetails, articleReducer, fetchArticleById } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

import styles from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className }) => {
  const { t } = useTranslation('articleDetails');
  const { id } = useParams() as { id: string };
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(fetchArticleById(id));
  }, [id]);

  return (
    <DynamicModuleLoader reducers={{ article: articleReducer }} removeAfterUnmount>
      <div className={classNames(styles.articleDetailsPage, {}, [className])}>
        {t('articleDetailsPage')}
      </div>
      <ArticleDetails />
    </DynamicModuleLoader>
  );
};

export default ArticleDetailsPage;
