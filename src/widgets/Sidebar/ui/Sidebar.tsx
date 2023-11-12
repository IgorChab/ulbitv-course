import React, { type FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';

import styles from './Sidebar.module.scss';

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const collapseSidebar = () => {
    setIsCollapsed(prev => !prev);
  };

  return (
    <div className={classNames(styles.sidebar, { [styles.collapsed]: isCollapsed }, [className])}>
      <button onClick={collapseSidebar}>toggle</button>
      <div className={classNames(styles.switchers, { [styles.switchersCollapsed]: isCollapsed })}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
