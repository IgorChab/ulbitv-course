import React, { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Typography } from 'shared/ui/Typography/Typography';

import styles from './ArticleImageBlock.module.scss';
import { type IArticleImageBlock } from '../../model/types/ArticleSchema';

interface ArticleImageBlockProps {
  className?: string
  block: IArticleImageBlock
}

export const ArticleImageBlock: FC<ArticleImageBlockProps> = ({ className, block }) => {
  return (
    <div className={classNames(styles.articleImageBlock, {}, [className])}>
      <img src={block.src} />
      <Typography variant="small" textAlign="center">{block.title}</Typography>
    </div>
  );
};
