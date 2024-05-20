import React, { useCallback, useMemo } from 'react';
import { type TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import { ArticleType } from 'entities/Article';
import { useSelector } from 'react-redux';
import { articlesFiltersSelectors } from 'features/ArticlesFilters';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { fetchArticlesList } from 'pages/ActiclesPage';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

import { articlesFiltersActions } from '../../model/slice/articlesFiltersSlice';

export const ArticleTypeTabs = React.memo(() => {
  const { t } = useTranslation('articles');
  const dispatch = useAppDispatch();
  const type = useSelector(articlesFiltersSelectors.getType);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setSearchParams] = useSearchParams();

  const onTabClick = useCallback((value: string) => {
    dispatch(articlesFiltersActions.setType(value as ArticleType));
    setSearchParams(searchParams => {
      searchParams.set('type', value);
      return searchParams;
    });
    void dispatch(fetchArticlesList({ page: 1, replaceData: true }));
  }, []);

  const tabs = useMemo<TabItem[]>(() => (
    [
      {
        value: ArticleType.ALL,
        content: t('all')
      },
      {
        value: ArticleType.IT,
        content: ArticleType.IT
      },
      {
        value: ArticleType.JS,
        content: ArticleType.JS
      },
      {
        value: ArticleType.PYTHON,
        content: ArticleType.PYTHON
      },
      {
        value: ArticleType.SCIENCE,
        content: t('science')
      },
      {
        value: ArticleType.POLITICS,
        content: t('politics')
      },
      {
        value: ArticleType.ECONOMICS,
        content: t('economics')
      }
    ]
  ), [t]);

  return (
    <Tabs tabs={tabs} onTabClick={onTabClick} value={type} />
  );
});
