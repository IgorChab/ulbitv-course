import React, { memo } from 'react';
import { ListBox, type ListBoxProps } from 'shared/ui/ListBox/ListBox';

import { Currency } from '../model/types';

interface CurrencyListBoxProps extends Omit<ListBoxProps<Currency>, 'value' | 'options'> {
  value?: Currency
}

interface CurrencyOptions {
  value: Currency
  content: Currency
}

const countryOptions: CurrencyOptions[] = [
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.USD, content: Currency.USD }
];

export const CurrencyListBox = memo<CurrencyListBoxProps>((props) => {
  return (
    <ListBox options={countryOptions} {...props} />
  );
});
