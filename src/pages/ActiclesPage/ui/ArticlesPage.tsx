import React, { type FC, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticlesList } from 'entities/Article';
import {
  DynamicModuleLoader,
  type ReducersMap
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { Typography } from 'shared/ui/Typography/Typography';
import { ArticlesViewSwitcher } from 'features/ArticlesViewSwitcher';
import { LocalStorageKeys } from 'shared/constants/LocalStorageKeys';
import { ScrollableContainer } from 'widgets/ScrollableContainer';
import { ArticlesFilters, articlesFiltersReducer } from 'features/ArticlesFilters';

import {
  articlesActions,
  articlesAdapterSelectors,
  articlesReducer
} from '../model/slice/articlesSlice';
import { fetchArticlesList } from '../model/services/fetchArticlesList';
import { articlesSelectors } from '../model/selectors/articlesSelectors';
import { type ArticlesView } from '../model/types/articlesSchema';
import styles from './ArticlesPage.module.scss';

const reducers: ReducersMap = {
  articles: articlesReducer,
  articlesFilters: articlesFiltersReducer
};

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
  const hasMore = useSelector(articlesSelectors.getHasMore);
  const page = useSelector(articlesSelectors.getArticlePage);
  const isReducerInited = useSelector(articlesSelectors.getReducerInited);

  const onSelectView = (view: ArticlesView) => {
    dispatch(articlesActions.setView(view));
    localStorage.setItem(LocalStorageKeys.ARTICLES_VIEW, view);
  };

  useEffect(() => {
    if (!isReducerInited) {
      void dispatch(fetchArticlesList({
        page: 1
      }));
      dispatch(articlesActions.setInited(true));
    }
  }, []);

  const onScrollEnd = useCallback(() => {
    if (hasMore && !isLoading) {
      void dispatch(fetchArticlesList({
        page: page + 1
      }));
      dispatch(articlesActions.setPaginationPage(page + 1));
    }
  }, [hasMore, isLoading, page]);

  if (error) {
    return (
      <Typography textAlign='center'>{t('articlesFetchError')}</Typography>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <ScrollableContainer
        className={className}
        onScrollEnd={onScrollEnd}
        isNeedSaveScrollOffset
      >
        <div className={styles.header}>
          {t('articlesPage')}
          <ArticlesViewSwitcher onSelectView={onSelectView} view={view} />
        </div>
        <ArticlesFilters />
        <ArticlesList
          view={view}
          articles={articles}
          isLoading={isLoading}
        />
      </ScrollableContainer>
    </DynamicModuleLoader>
  );
};

export default ArticlesPage;
