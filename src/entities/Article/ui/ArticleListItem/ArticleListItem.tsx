import React, { type FC, type HTMLAttributeAnchorTarget } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Typography } from 'shared/ui/Typography/Typography';
import EyeIcon from 'shared/assets/icons/icon_eye_outlined.svg';
import { useTranslation } from 'react-i18next';
import { AppPaths } from 'shared/config/routeConfig/routeConfig';
import { Card } from 'shared/ui/Card/Card';
import { AppLink } from 'shared/ui/AppLink/AppLink';

import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock';
import styles from './ArticleListItem.module.scss';
import { type Article, type IArticleTextBlock } from '../../model/types/ArticleSchema';

interface ArticleListItemProps {
  className?: string
  article: Article
  target?: HTMLAttributeAnchorTarget
}

export const ArticleListItem: FC<ArticleListItemProps> = ({ className, article, target }) => {
  const {
    id,
    img,
    title,
    types,
    views,
    createdAt,
    user,
    blocks
  } = article;

  const { t } = useTranslation('articles');

  const textBlock = blocks.find(
    (block) => block.type === 'TEXT'
  ) as IArticleTextBlock | undefined;

  return (
    <Card className={classNames(styles.articleListItem, {}, [className])}>
      <div className={styles.header}>
        <div className={styles.user}>
          <Avatar size={30} src={user.avatar} />
          <Typography variant="subtitle">{user.username}</Typography>
        </div>
        <Typography variant="small">{createdAt}</Typography>
      </div>
      <Typography>{title}</Typography>
      <Typography variant="subtitle" className={styles.types}>{types.join(', ')}</Typography>
      <img className={styles.image} src={img} alt={title} />
      {textBlock && (
        <ArticleTextBlock block={textBlock} className={styles.textBlock} />
      )}
      <div className={styles.footer}>
        <AppLink
          to={`${AppPaths.article_details}${id}`}
          variant="primary"
          target={target}
          className={styles.link}
        >
          {t('readMore')}
        </AppLink>
        <div className={styles.views}>
          <Typography variant="small">{views}</Typography>
          <EyeIcon />
        </div>
      </div>
    </Card>
  );
};
