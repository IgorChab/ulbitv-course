import React, { type FC, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticlesList } from 'entities/Article';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { Typography } from 'shared/ui/Typography/Typography';
import { ArticlesViewSwitcher } from 'features/ArticlesViewSwitcher';
import { LocalStorageKeys } from 'shared/constants/LocalStorageKeys';

import {
  articlesActions,
  articlesAdapterSelectors,
  articlesReducer
} from '../model/slice/articlesSlice';
import { fetchArticlesList } from '../model/services/fetchArticlesList';
import { articlesSelectors } from '../model/selectors/articlesSelectors';
import { type ArticlesView } from '../model/types/articlesSchema';
import styles from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string
}

const ArticlesPage: FC<ArticlesPageProps> = ({ className }) => {
  const { t } = useTranslation('articles');
  const dispatch = useAppDispatch();
  const articles = useSelector(articlesAdapterSelectors.selectAll);
  const isLoading = useSelector(articlesSelectors.isLoading);
  const error = useSelector(articlesSelectors.getArticlesError);
  const view = useSelector(articlesSelectors.getArticlesView);

  const onSelectView = (view: ArticlesView) => {
    dispatch(articlesActions.setView(view));
    localStorage.setItem(LocalStorageKeys.ARTICLES_VIEW, view);
  };

  useEffect(() => {
    void dispatch(fetchArticlesList());
    dispatch(articlesActions.setInitialView());
  }, []);

  if (error) {
    return (
      <Typography textAlign='center'>{t('articlesFetchError')}</Typography>
    );
  }

  return (
    <DynamicModuleLoader reducers={{ articles: articlesReducer }}>
      <div className={classNames('', {}, [className])}>
        <div className={styles.header}>
          {t('articlesPage')}
          <ArticlesViewSwitcher onSelectView={onSelectView} view={view} />
        </div>
        <ArticlesList
          view={view}
          articles={articles}
          isLoading={isLoading}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default ArticlesPage;
