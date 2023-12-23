import React, { type FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

import styles from './Sidebar.module.scss';

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const { t } = useTranslation();

  const collapseSidebar = () => {
    setIsCollapsed(prev => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(styles.sidebar, { [styles.collapsed]: isCollapsed }, [className])}
    >
      <Button
        data-testid="toggleSidebarButton"
        variant='clear'
        onClick={collapseSidebar}
      >
        {t('toggle')}
      </Button>
      <div className={classNames(styles.switchers, { [styles.switchersCollapsed]: isCollapsed })}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
