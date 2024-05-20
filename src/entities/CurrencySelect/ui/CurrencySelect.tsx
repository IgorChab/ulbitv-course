import React, { memo } from 'react';
import { Select, type SelectProps } from 'shared/ui/Select/Select';

import { Currency } from '../model/types';

interface CurrencySelectProps extends Omit<SelectProps<Currency>, 'value' | 'options'> {
  value?: Currency
}

interface CurrencySelectOptions {
  value: Currency
  content: Currency
}

const countrySelectOptions: CurrencySelectOptions[] = [
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.USD, content: Currency.USD }
];

export const CurrencySelect = memo<CurrencySelectProps>(({
  className,
  value,
  ...otherProps
}) => {
  return (
    <Select
      className={className}
      value={value}
      options={countrySelectOptions}
      {...otherProps}
    />
  );
});
