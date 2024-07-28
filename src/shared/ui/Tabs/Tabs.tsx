import React, { type FC, useCallback } from 'react';
import { Card } from 'shared/ui/Card/Card';
import { HStack } from 'shared/ui/Stack';

import styles from './Tabs.module.scss';

export interface TabItem {
  value: string
  content: string
}

interface TabsProps {
  tabs: TabItem[]
  value?: string
  onTabClick?: (value: string) => void
  className?: string
}

export const Tabs: FC<TabsProps> = React.memo(({
  className,
  tabs,
  onTabClick,
  value
}) => {
  const onClickHandler = useCallback((value: string) => () => {
    onTabClick && onTabClick(value);
  }, [onTabClick]);

  return (
    <HStack className={className} gap={8}>
      {tabs.map((tab) => (
        <Card
          onClick={onClickHandler(tab.value)}
          key={tab.value}
          variant={tab.value === value ? 'primary' : 'outlined'}
          className={styles.tab}
        >
          {tab.content}
        </Card>
      ))}
    </HStack>
  );
});
