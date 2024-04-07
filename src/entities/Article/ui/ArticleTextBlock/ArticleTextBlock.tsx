import React, { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import styles from './ArticleTextBlock.module.scss';
import { type IArticleTextBlock } from '../../model/types/ArticleSchema';

interface ArticleTextBlockProps {
  className?: string
  block: IArticleTextBlock
}

export const ArticleTextBlock: FC<ArticleTextBlockProps> = ({ className, block }) => {
  return (
    <div className={classNames(styles.articleTextBlock, {}, [className])}>
      {block.paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};
