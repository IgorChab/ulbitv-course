import React, { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Typography } from 'shared/ui/Typography/Typography';
import { useTranslation } from 'react-i18next';

import { type Comment } from '../../model/types/Comment';
import styles from './CommentsList.module.scss';
import { CommentItem } from '../CommentItem/CommentItem';
import { CommentsListSkeleton } from '../CommentsListSkeleton/CommentsListSkeleton';

interface CommentsListProps {
  className?: string
  comments?: Comment[]
  isLoading?: boolean
}

export const CommentsList: FC<CommentsListProps> = ({ className, comments, isLoading }) => {
  const { t } = useTranslation('articleDetails');

  if (isLoading) {
    return (
      <CommentsListSkeleton />
    );
  }

  return (
    <div className={classNames(styles.commentsList, {}, [className])}>
      {comments?.length
        ? comments.map((comment) => (
          <CommentItem comment={comment} key={comment.id} />
        ))
        : <Typography variant="subtitle">{t('noCommentsYet')}</Typography>
      }
    </div>
  );
};
