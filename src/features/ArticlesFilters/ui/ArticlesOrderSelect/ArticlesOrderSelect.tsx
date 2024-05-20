import React, { type FC, useMemo } from 'react';
import { Select, type SelectOptions, type SelectProps } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';

import { type Order } from '../../model/types/ArticlesFiltersSchema';

interface ArticlesOrderSelectProps extends Omit<SelectProps<Order>, 'options' | 'onChange'> {
  onChange: (value: Order) => void
  value: Order
}

export const ArticlesOrderSelect: FC<ArticlesOrderSelectProps> = React.memo((props) => {
  const { t } = useTranslation('articles');

  const orderOptions = useMemo<Array<SelectOptions<Order>>>(() => (
    [
      {
        value: 'asc',
        content: t('byAsc')
      },
      {
        value: 'desc',
        content: t('byDesc')
      }
    ]
  ), [t]);

  return (
    <Select {...props} options={orderOptions} />
  );
});
