import React, { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { articleMock } from 'shared/constants/__mocks__/article';

import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { type Article } from '../../model/types/ArticleSchema';
import styles from './ArticlesList.module.scss';
import { ArticleCellItem } from '../ArticleCellItem/ArticleCellItem';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleCellItemSkeleton } from '../ArticleCellItem/ArticleCellItemSkeleton';

interface ArticlesListProps {
  className?: string
  articles: Article[]
  view: 'cell' | 'list'
  isLoading?: boolean
}

// TODO: получать из пропсов
const articles = Array(10)
  .fill(0)
  .map((_, index) => ({ ...articleMock, id: String(index) }));

const renderSkeletons = (view: 'cell' | 'list') => {
  const arrayLength = view === 'cell' ? 10 : 3;
  return Array(arrayLength).fill(0).map((_, index) => {
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
  isLoading
}) => {
  if (isLoading) {
    return (
      <div className={classNames(styles.articlesList, {}, [className])}>
        {renderSkeletons(view)}
      </div>
    );
  }
  return (
    <div className={classNames(styles.articlesList, {}, [className])}>
      {view === 'cell' ? (
        articles.map((article) => (
          <ArticleCellItem article={article} key={article.id} />
        ))
      ) : (
        articles.map((article) => (
          <ArticleListItem article={article} key={article.id} />
        ))
      )}
    </div>
  );
};
