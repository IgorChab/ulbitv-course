import React, { type FC, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';
import { useTranslation } from 'react-i18next';
import { Typography } from 'shared/ui/Typography/Typography';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useDebounce } from 'shared/lib/hooks/useDebounce';
import { useSelector } from 'react-redux';
import { fetchArticlesList } from 'pages/ActiclesPage';
import { useSearchParams } from 'react-router-dom';
import { HStack } from 'shared/ui/Stack';

import { articlesFiltersSelectors } from '../../model/selectors/articlesFiltersSelectors';
import { type Order, type SortFields } from '../../model/types/ArticlesFiltersSchema';
import { ArticlesOrderSelect } from '../ArticlesOrderSelect/ArticlesOrderSelect';
import styles from './ArticlesFilters.module.scss';
import { ArticlesSortSelect } from '../ArticlesSortSelect/ArticlesSortSelect';
import { articlesFiltersActions } from '../../model/slice/articlesFiltersSlice';
import { ArticleTypeTabs } from '../ArticleTypeTabs/ArticleTypeTabs';

interface ArticlesFiltersProps {
  className?: string
}

export const ArticlesFilters: FC<ArticlesFiltersProps> = ({ className }) => {
  const { t } = useTranslation('articles');
  const dispatch = useAppDispatch();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setSearchParams] = useSearchParams();
  const sort = useSelector(articlesFiltersSelectors.getSort);
  const order = useSelector(articlesFiltersSelectors.getOrder);
  const search = useSelector(articlesFiltersSelectors.getSearch);

  const onChangeSort = useCallback((sort: SortFields) => {
    dispatch(articlesFiltersActions.setSort(sort));
    setSearchParams(searchParams => {
      searchParams.set('sort', sort);
      return searchParams;
    });
    void dispatch(fetchArticlesList({ page: 1, replaceData: true }));
  }, []);

  const onChangeOrder = useCallback((order: Order) => {
    dispatch(articlesFiltersActions.setOrder(order));
    setSearchParams(searchParams => {
      searchParams.set('order', order);
      return searchParams;
    });
    void dispatch(fetchArticlesList({ page: 1, replaceData: true }));
  }, []);

  const debouncedFetchArticles = useDebounce(() => {
    void dispatch(fetchArticlesList({ page: 1, replaceData: true }));
  });

  const onChangeSearch = useCallback((search: string) => {
    dispatch(articlesFiltersActions.setSearch(search));
    setSearchParams(searchParams => {
      searchParams.set('search', search);
      return searchParams;
    });
    debouncedFetchArticles();
  }, []);

  return (
    <div className={classNames(styles.articlesFilters, {}, [className])}>
      <HStack gap={8}>
        <Typography variant="subtitle">{t('sortBy')}</Typography>
        <ArticlesSortSelect onChange={onChangeSort} value={sort} />
        <ArticlesOrderSelect onChange={onChangeOrder} value={order} />
      </HStack>
      <Card className={styles.input}>
        <Input label={t('search')} onChange={onChangeSearch} value={search} />
      </Card>
      <ArticleTypeTabs />
    </div>
  );
};
