import React, { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';

import { articleSelectors } from '../../model/selectors/articleSelectors';
import { ArticleDetailsSkeleton } from '../ArticleDetailsSkeleton/ArticleDetailsSkeleton';
import styles from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
  className?: string
}

export const ArticleDetails: FC<ArticleDetailsProps> = ({ className }) => {
  const isLoading = useSelector(articleSelectors.getIsLoading);
  // const article = useSelector(articleSelectors.getArticle);

  if (isLoading) {
    return (
      <ArticleDetailsSkeleton />
    );
  }

  return (
    <div className={classNames(styles.articleDetails, {}, [className])}>
      data fetched
    </div>
  );
};
