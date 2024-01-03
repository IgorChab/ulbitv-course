import React, { type FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { ArrowIcon } from 'shared/ui/ArrowIcon/ArrowIcon';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import HomeIcon from 'shared/assets/icons/icon_home.svg';
import InfoIcon from 'shared/assets/icons/icon_info.svg';
import { AppPaths } from 'shared/config/routeConfig/routeConfig';

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
      <div className={styles.linksContainer}>
        <AppLink to={AppPaths.main} className={styles.linkItem}>
          <HomeIcon />
          <p className={styles.linkTitle}>{t('mainPage')}</p>
        </AppLink>
        <AppLink to={AppPaths.about} className={styles.linkItem}>
          <InfoIcon />
          <p className={styles.linkTitle}>{t('aboutPage')}</p>
        </AppLink>
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
