import React, { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Typography } from 'shared/ui/Typography/Typography';
import { Button } from 'shared/ui/Button/Button';
import EyeIcon from 'shared/assets/icons/icon_eye_outlined.svg';
import { useTranslation } from 'react-i18next';
import { ArticleTextBlock } from 'entities/Article/ui/ArticleTextBlock/ArticleTextBlock';
import { useNavigate } from 'react-router-dom';
import { AppPaths } from 'shared/config/routeConfig/routeConfig';

import styles from './ArticleListItem.module.scss';
import { type Article, type IArticleTextBlock } from '../../model/types/ArticleSchema';

interface ArticleListItemProps {
  className?: string
  article: Article
}

export const ArticleListItem: FC<ArticleListItemProps> = ({ className, article }) => {
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
  const navigate = useNavigate();

  const textBlock = blocks.find(
    (block) => block.type === 'TEXT'
  ) as IArticleTextBlock | undefined;

  const onClickMoreButton = () => {
    navigate(`${AppPaths.article_details}${id}`);
  };

  return (
    <div className={classNames(styles.articleListItem, {}, [className])}>
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
        <Button variant="outline" onClick={onClickMoreButton}>
          {t('readMore')}
        </Button>
        <div className={styles.views}>
          <Typography variant="small">{views}</Typography>
          <EyeIcon />
        </div>
      </div>
    </div>
  );
};
