import React, { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Typography } from 'shared/ui/Typography/Typography';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { AppPaths } from 'shared/config/routeConfig/routeConfig';

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
      <AppLink to={`${AppPaths.profile}${user.id}`} className={styles.header}>
        <Avatar size={30} src={user.avatar} />
        <Typography>{user.username}</Typography>
      </AppLink>
      <Typography variant="subtitle">{text}</Typography>
    </div>
  );
};
