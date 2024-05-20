import React, { type SelectHTMLAttributes, type ChangeEvent, type LegacyRef } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import styles from './Select.module.scss';

export interface SelectOptions<Value> {
  value: Value
  content: string | number
}

type SelectAttributes = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange'>;

export interface SelectProps<Value extends string | number> extends SelectAttributes {
  className?: string
  value?: Value
  options: Array<SelectOptions<Value>>
  onChange?: (value: Value) => void
  selectRef?: LegacyRef<HTMLSelectElement>
}

export const Select = <Value extends string | number>({
  className,
  value,
  options,
  onChange,
  selectRef,
  ...otherProps
}: SelectProps<Value>) => {
  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange && onChange(e.target.value as Value);
  };

  return (
    <select
      className={classNames(styles.select, {}, [className])}
      value={value}
      onChange={onChangeHandler}
      ref={selectRef}
      {...otherProps}
    >
      {options.map(({ value, content }) => (
        <option value={value} key={value}>
          {content}
        </option>
      ))}
    </select>
  );
};
