import React, { type FC } from 'react';
import { useSelector } from 'react-redux';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Typography } from 'shared/ui/Typography/Typography';
import IconEye from 'shared/assets/icons/icon_eye_outlined.svg';
import IconDate from 'shared/assets/icons/icon_date_line.svg';
import { useTranslation } from 'react-i18next';

import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock';
import { articleSelectors } from '../../model/selectors/articleSelectors';
import { ArticleDetailsSkeleton } from '../ArticleDetailsSkeleton/ArticleDetailsSkeleton';
import styles from './ArticleDetails.module.scss';
import { type ArticleBlock, ArticleBlockType } from '../../model/types/ArticleSchema';
import { ArticleCodeBlock } from '../ArticleCodeBlock/ArticleCodeBlock';
import { ArticleImageBlock } from '../ArticleImageBlock/ArticleImageBlock';

interface ArticleDetailsProps {
  className?: string
}

const renderBlock = (block: ArticleBlock) => {
  switch (block.type) {
    case ArticleBlockType.TEXT:
      return (<ArticleTextBlock key={block.id} block={block} />);
    case ArticleBlockType.CODE:
      return (<ArticleCodeBlock key={block.id} block={block} />);
    case ArticleBlockType.IMAGE:
      return (<ArticleImageBlock key={block.id} block={block} />);
    default:
      return null;
  }
};

export const ArticleDetails: FC<ArticleDetailsProps> = ({ className }) => {
  const { t } = useTranslation('articleDetails');
  const isLoading = useSelector(articleSelectors.getIsLoading);
  const error = useSelector(articleSelectors.getArticleError);
  const article = useSelector(articleSelectors.getArticle);

  if (isLoading) {
    return (
      <ArticleDetailsSkeleton />
    );
  }

  if (error) {
    return (
      <Typography textAlign="center">{t('articleNotFound')}</Typography>
    );
  }

  return (
    <>
      <div className={styles.articleInfo}>
        <Avatar size={200} src={article?.img} className={styles.articleImage} />
        <Typography>{article?.title}</Typography>
        <Typography variant="subtitle">{article?.subtitle}</Typography>
        <div className={styles.iconWrapper}>
          <IconEye />
          <Typography variant="small">{article?.views}</Typography>
        </div>
        <div className={styles.iconWrapper}>
          <IconDate />
          <Typography variant="small">{article?.createdAt}</Typography>
        </div>
      </div>
      <div className={styles.blocksContainer}>
        {article?.blocks.map(renderBlock)}
      </div>
    </>
  );
};
