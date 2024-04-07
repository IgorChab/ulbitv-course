import React, { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import IconCopy from 'shared/assets/icons/icon_copy.svg';
import { Button } from 'shared/ui/Button/Button';

import styles from './ArticleCodeBlock.module.scss';
import { type IArticleCodeBlock } from '../../model/types/ArticleSchema';

interface ArticleCodeBlockProps {
  className?: string
  block: IArticleCodeBlock
}

export const ArticleCodeBlock: FC<ArticleCodeBlockProps> = ({ className, block }) => {
  const copyHandler = () => {
    void navigator.clipboard.writeText(block.code);
  };

  return (
    <div className={classNames(styles.articleCodeBlock, {}, [className])}>
      <Button variant="clear" className={styles.copyIcon} onClick={copyHandler}>
        <IconCopy />
      </Button>
      <pre>
        <code>
          {block.code}
        </code>
      </pre>
    </div>
  );
};
