import React, { type FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button } from 'shared/ui/Button/Button';
import { ArrowIcon } from 'shared/ui/ArrowIcon/ArrowIcon';
import { SidebarItemsList } from 'widgets/Sidebar/model/sidebarItems';

import styles from './Sidebar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const collapseSidebar = () => {
    setIsCollapsed(prev => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(styles.sidebar, { [styles.collapsed]: isCollapsed }, [className])}
    >
      <div className={styles.linksContainer}>
        {
          SidebarItemsList.map((item) => (
            <SidebarItem
              item={item}
              isCollapsed={isCollapsed}
              key={item.path}
            />
          ))
         }
      </div>
      <Button
        data-testid="toggleSidebarButton"
        variant="clear"
        className={styles.collapseButton}
        onClick={collapseSidebar}
      >
        <ArrowIcon
          direction={isCollapsed ? 'right' : 'left'}
        />
      </Button>
      <div className={classNames(styles.switchers)}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
