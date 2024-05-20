import React, { type FC, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card/Card';

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
    <div className={classNames(styles.tabs, {}, [className])}>
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
    </div>
  );
});
