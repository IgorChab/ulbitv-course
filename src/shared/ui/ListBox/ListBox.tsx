import {
  Listbox as HListBox,
  ListboxButton,
  ListboxOption,
  ListboxOptions
} from '@headlessui/react';
import { HStack } from 'shared/ui/Stack';
import { ArrowIcon } from 'shared/ui/ArrowIcon/ArrowIcon';
import { classNames } from 'shared/lib/classNames/classNames';

import styles from './ListBox.module.scss';

export interface ListBoxOptions<Value> {
  value: Value
  content: string | number
}

export interface ListBoxProps<Value extends string | number> {
  value?: Value
  options: Array<ListBoxOptions<Value>>
  onChange?: (value: Value) => void
  disabled?: boolean
  className?: string
}

export const ListBox = <Value extends string | number>({
  value,
  options,
  onChange,
  disabled,
  className
}: ListBoxProps<Value>) => {
  return (
    <HListBox value={value} onChange={onChange} disabled={disabled}>
      <ListboxButton
        className={classNames(styles.button, { [styles.disabled]: !!disabled }, [className])}
      >
        <HStack>
          {value}
          <ArrowIcon fill='white' />
        </HStack>
      </ListboxButton>
      <ListboxOptions anchor="bottom start" className={styles.optionsContainer}>
        {options.map(({ value, content }) => (
          <ListboxOption
            key={value}
            value={value}
            className={styles.option}
          >
            {content}
          </ListboxOption>
        ))}
      </ListboxOptions>
    </HListBox>
  );
};
