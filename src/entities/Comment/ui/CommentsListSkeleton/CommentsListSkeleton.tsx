import React, { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';

import styles from './CommentsListSkeleton.module.scss';

interface CommentsListSkeletonProps {
  className?: string
}

const CommentSkeleton = () => {
  return (
    <div className={classNames(styles.commentSkeleton, {})}>
      <div className={styles.header}>
        <Skeleton width={30} height={30} borderRadius='50%' />
        <Skeleton width={150} height={15} />
      </div>
      <Skeleton width="100%" height={50} mt={10} />
    </div>
  );
};

export const CommentsListSkeleton: FC<CommentsListSkeletonProps> = ({ className }) => {
  return (
    <div className={styles.commentsListSkeleton}>
      <CommentSkeleton />
      <CommentSkeleton />
      <CommentSkeleton />
    </div>
  );
};
