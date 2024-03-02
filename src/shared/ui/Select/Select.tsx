import React, { type SelectHTMLAttributes, memo, forwardRef } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import styles from './Select.module.scss';

interface SelectOptions {
  value: string | number
  content: string | number
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string
  options: SelectOptions[]
}

export const Select = memo(forwardRef<HTMLSelectElement, SelectProps>(({
  className,
  value,
  options,
  onChange,
  ...otherProps
}, ref) => {
  return (
    <select
      className={classNames(styles.select, {}, [className])}
      value={value}
      onChange={onChange}
      ref={ref}
      {...otherProps}
    >
      {options.map(({ value, content }) => (
        <option value={value} key={value}>
          {content}
        </option>
      ))}
    </select>
  );
}));
