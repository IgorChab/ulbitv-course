import React, { memo } from 'react';
import { Select, type SelectProps } from 'shared/ui/Select/Select';

import { Country } from '../model/types';

interface CountrySelectProps extends Omit<SelectProps<Country>, 'value' | 'options'> {
  value?: Country
}

interface CountrySelectOptions {
  value: Country
  content: Country
}

const countrySelectOptions: CountrySelectOptions[] = [
  { value: Country.UK, content: Country.UK },
  { value: Country.RUSSIA, content: Country.RUSSIA },
  { value: Country.USA, content: Country.USA },
  { value: Country.BELARUS, content: Country.BELARUS },
  { value: Country.GEORGIA, content: Country.GEORGIA }
];

export const CountrySelect = memo<CountrySelectProps>(({
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
