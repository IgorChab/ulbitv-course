import React, { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Card } from 'shared/ui/Card/Card';

import styles from './ArticleCellItem.module.scss';

interface ArticleCellItemSkeletonProps {
  className?: string
}

export const ArticleCellItemSkeleton: FC<ArticleCellItemSkeletonProps> = ({ className }) => {
  return (
    <Card className={classNames(styles.articleCellItem, {}, [className])}>
      <div className={styles.imageWrapper}>
        <Skeleton width={200} height={200} />
      </div>
      <div className={styles.typesWrapper}>
        <Skeleton width={100} height={16} mt={10} />
      </div>
      <Skeleton width={130} height={24} mt={10} />
    </Card>
  );
};
