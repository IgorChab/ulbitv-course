import { Menu, MenuButton, MenuItem, MenuItems, type MenuItemsProps } from '@headlessui/react';
import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';

import styles from './Dropdown.module.scss';

interface DropdownItem {
  text: string
  onClick?: () => void
  disabled?: boolean
  href?: string
}

export interface DropdownProps {
  items: DropdownItem[]
  triggerSlot: ReactNode
  className?: string
  anchor?: MenuItemsProps['anchor']
}

const getCorrectMenuItem = ({ text, onClick, href, disabled }: DropdownItem) => {
  if (href) {
    return (
      <MenuItem
        key={text}
        disabled={disabled}
        as={Link}
        to={href}
        className={styles.menuItem}
      >
        {text}
      </MenuItem>
    );
  }

  return (
    <MenuItem
      key={text}
      disabled={disabled}
      as='button'
      onClick={onClick}
      className={styles.menuItem}
    >
      {text}
    </MenuItem>
  );
};

export const Dropdown = ({
  items,
  triggerSlot,
  className,
  anchor = 'bottom end'
}: DropdownProps) => {
  return (
    <Menu>
      <MenuButton className={classNames(styles.menuButton, {}, [className])}>
        {triggerSlot}
      </MenuButton>
      <MenuItems anchor={anchor} className={styles.itemsContainer}>
        {items.map((item) => (
          getCorrectMenuItem(item)
        ))}
      </MenuItems>
    </Menu>
  );
};
