import React, { type FC, type HTMLAttributeAnchorTarget } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { type ArticlesView } from 'pages/ActiclesPage';

import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { type Article } from '../../model/types/ArticleSchema';
import styles from './ArticlesList.module.scss';
import { ArticleCellItem } from '../ArticleCellItem/ArticleCellItem';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleCellItemSkeleton } from '../ArticleCellItem/ArticleCellItemSkeleton';

interface ArticlesListProps {
  className?: string
  articles: Article[]
  view: ArticlesView
  isLoading?: boolean
  skeletonCount?: number
  target?: HTMLAttributeAnchorTarget
}

const renderSkeletons = (view: ArticlesView, count?: number) => {
  const arrayLength = view === 'cell' ? 10 : 3;
  return Array(count || arrayLength).fill(0).map((_, index) => {
    if (view === 'cell') {
      return (
        <ArticleCellItemSkeleton key={index} />
      );
    } else {
      return (
        <ArticleListItemSkeleton key={index} />
      );
    }
  });
};

export const ArticlesList: FC<ArticlesListProps> = ({
  className,
  view,
  articles,
  skeletonCount,
  isLoading,
  target
}) => {
  return (
    <div className={classNames(styles.articlesList, {}, [className])}>
      {view === 'cell' ? (
        articles.map((article) => (
          <ArticleCellItem article={article} key={article.id} target={target} />
        ))
      ) : (
        articles.map((article) => (
          <ArticleListItem article={article} key={article.id} target={target} />
        ))
      )}
      {isLoading && renderSkeletons(view, skeletonCount)}
    </div>
  );
};
