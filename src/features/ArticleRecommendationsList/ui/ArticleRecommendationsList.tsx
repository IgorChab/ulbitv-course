import React from 'react';
import { Typography } from 'shared/ui/Typography/Typography';
import { ArticlesList } from 'entities/Article';
import { useTranslation } from 'react-i18next';

import { useGetRecommendationsQuery } from '../api/articleRecommendationsApi';
import styles from './ArticleRecommendationsList.module.scss';

export const ArticleRecommendationsList = () => {
  const { t } = useTranslation('articleDetails');
  const { data, isLoading } = useGetRecommendationsQuery(8);

  return (
    <>
      <Typography>{t('weRecommend')}</Typography>
      <ArticlesList
        articles={data}
        isLoading={isLoading}
        view="cell"
        skeletonCount={8}
        target="_blank"
        className={styles.recommendations}
      />
    </>
  );
};
