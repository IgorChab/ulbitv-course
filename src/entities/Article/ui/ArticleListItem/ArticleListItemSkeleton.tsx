import React, { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Card } from 'shared/ui/Card/Card';

import styles from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
  className?: string
}

export const ArticleListItemSkeleton: FC<ArticleListItemSkeletonProps> = ({ className }) => {
  return (
    <Card className={classNames(styles.articleListItem, {}, [className])}>
      <div className={styles.header}>
        <div className={styles.user}>
          <Skeleton borderRadius="50%" width={30} height={30} />
          <Skeleton width={100} height={16} />
        </div>
      </div>
      <Skeleton width={300} height={24} mb={10} />
      <Skeleton width={150} height={16} mb={20} />
      <Skeleton width="100%" height={200} mb={20} />
      <div className={styles.footer}>
        <Skeleton width={100} height={40} borderRadius={20} />
      </div>
    </Card>
  );
};
