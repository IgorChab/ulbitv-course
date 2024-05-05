import React, { type FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button } from 'shared/ui/Button/Button';
import { ArrowIcon } from 'shared/ui/ArrowIcon/ArrowIcon';
import { useSelector } from 'react-redux';

import styles from './Sidebar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const sidebarItems = useSelector(getSidebarItems);

  const [isCollapsed, setIsCollapsed] = useState(false);

  const collapseSidebar = () => {
    setIsCollapsed(prev => !prev);
  };

  return (
    <nav
      data-testid="sidebar"
      className={classNames(styles.sidebar, { [styles.collapsed]: isCollapsed }, [className])}
    >
      <div className={styles.linksContainer}>
        {
          sidebarItems.map((item) => (
            <SidebarItem
              key={item.path}
              item={item}
              isCollapsed={isCollapsed}
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
    </nav>
  );
};
