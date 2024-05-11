import React, { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Typography } from 'shared/ui/Typography/Typography';
import EyeIcon from 'shared/assets/icons/icon_eye_outlined.svg';
import { AppPaths } from 'shared/config/routeConfig/routeConfig';
import { useNavigate } from 'react-router-dom';
import { Card } from 'shared/ui/Card/Card';

import styles from './ArticleCellItem.module.scss';
import { type Article } from '../../model/types/ArticleSchema';

interface ArticleCellItemProps {
  className?: string
  article: Article
}

export const ArticleCellItem: FC<ArticleCellItemProps> = ({ className, article }) => {
  const {
    id,
    img,
    title,
    types,
    views,
    createdAt
  } = article;

  const navigate = useNavigate();

  const onClickItem = () => {
    navigate(`${AppPaths.article_details}${id}`);
  };

  return (
    <Card className={classNames(styles.articleCellItem, {}, [className])} onClick={onClickItem}>
      <div className={styles.imageWrapper}>
        <img src={img} alt={title} className={styles.image} />
        <Typography variant="small" className={styles.date}>{createdAt}</Typography>
      </div>
      <div className={styles.typesWrapper}>
        <Typography variant="small" className={styles.types}>{types.join(', ')}</Typography>
        <div className={styles.views}>
          <Typography variant="small">{views}</Typography>
          <EyeIcon />
        </div>
      </div>
      <Typography variant="subtitle" className={styles.title}>{title}</Typography>
    </Card>
  );
};
