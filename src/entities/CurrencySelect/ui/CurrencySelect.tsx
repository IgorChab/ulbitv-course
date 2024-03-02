import React, { forwardRef, memo } from 'react';
import { Select, type SelectProps } from 'shared/ui/Select/Select';

import { Currency } from '../model/types';

interface CurrencySelectProps extends Omit<SelectProps, 'value' | 'options'> {
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

export const CurrencySelect = memo(forwardRef<HTMLSelectElement, CurrencySelectProps>(({
  className,
  value,
  ...otherProps
}, ref) => {
  return (
    <Select
      className={className}
      value={value}
      options={countrySelectOptions}
      ref={ref}
      {...otherProps}
    />
  );
}));
