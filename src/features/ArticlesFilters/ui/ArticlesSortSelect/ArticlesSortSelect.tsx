import React, { type FC, useMemo } from 'react';
import { Select, type SelectOptions, type SelectProps } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';

import { type SortFields } from '../../model/types/ArticlesFiltersSchema';

interface ArticlesSortSelectProps extends Omit<SelectProps<SortFields>, 'options' | 'onChange'> {
  onChange: (value: SortFields) => void
  value: SortFields
}

export const ArticlesSortSelect: FC<ArticlesSortSelectProps> = React.memo((props) => {
  const { t } = useTranslation('articles');

  const sortOptions = useMemo<Array<SelectOptions<SortFields>>>(() => (
    [
      {
        value: 'title',
        content: t('byTitle')
      },
      {
        value: 'views',
        content: t('byViews')
      },
      {
        value: 'createdAt',
        content: t('byCreatedAt')
      }
    ]
  ), [t]);

  return (
    <Select {...props} options={sortOptions} />
  );
});
