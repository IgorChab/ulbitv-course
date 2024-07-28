import React, { type FC } from 'react';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { HStack } from 'shared/ui/Stack';

import styles from './SidebarItem.module.scss';
import { type SidebarItemType } from '../../model/types/sidebar';

interface SidebarItemProps {
  item: SidebarItemType
  isCollapsed: boolean
}

export const SidebarItem: FC<SidebarItemProps> = React.memo(({ item, isCollapsed }) => {
  const {
    path,
    text,
    Icon
  } = item;

  const { t } = useTranslation();

  return (
    <AppLink to={path}>
      <HStack className={classNames(styles.linkItem, { [styles.collapsed]: isCollapsed })}>
        <Icon />
        <p className={styles.linkTitle}>{t(text)}</p>
      </HStack>
    </AppLink>
  );
});
