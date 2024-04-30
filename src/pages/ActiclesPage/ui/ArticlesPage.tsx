import React, { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticlesList } from 'entities/Article';

interface ArticlesPageProps {
  className?: string
}

const ArticlesPage: FC<ArticlesPageProps> = ({ className }) => {
  const { t } = useTranslation('articles');

  return (
    <div className={classNames('', {}, [className])}>
      {t('articlesPage')}
      <ArticlesList view="list" articles={[]} isLoading={false} />
    </div>
  );
};

export default ArticlesPage;
