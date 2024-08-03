import React, { memo } from 'react';
import { ListBox, type ListBoxProps } from 'shared/ui/ListBox/ListBox';

import { Country } from '../model/types';

interface CountryListBoxProps extends Omit<ListBoxProps<Country>, 'value' | 'options'> {
  value?: Country
}

interface CountryOptions {
  value: Country
  content: Country
}

const countryOptions: CountryOptions[] = [
  { value: Country.UK, content: Country.UK },
  { value: Country.RUSSIA, content: Country.RUSSIA },
  { value: Country.USA, content: Country.USA },
  { value: Country.BELARUS, content: Country.BELARUS },
  { value: Country.GEORGIA, content: Country.GEORGIA }
];

export const CountryListBox = memo<CountryListBoxProps>((props) => {
  return (
    <ListBox options={countryOptions} {...props} />
  );
});
