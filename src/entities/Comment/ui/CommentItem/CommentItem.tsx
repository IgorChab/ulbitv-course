import React, { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Typography } from 'shared/ui/Typography/Typography';

import styles from './CommentItem.module.scss';
import { type Comment } from '../../model/types/Comment';

interface CommentItemProps {
  className?: string
  comment: Comment
}

export const CommentItem: FC<CommentItemProps> = ({ className, comment }) => {
  const {
    text,
    user
  } = comment;

  return (
    <div className={classNames(styles.commentItem, {}, [className])}>
      <div className={styles.header}>
        <Avatar size={30} src={user.avatar} />
        <Typography>{user.username}</Typography>
      </div>
      <Typography variant="subtitle">{text}</Typography>
    </div>
  );
};
