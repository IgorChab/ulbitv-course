import type React from 'react';
import { AppPaths } from 'shared/config/routeConfig/routeConfig';
import HomeIcon from 'shared/assets/icons/icon_home.svg';
import InfoIcon from 'shared/assets/icons/icon_info.svg';
import ProfileIcon from 'shared/assets/icons/icon_profile.svg';
import ArticlesIcon from 'shared/assets/icons/icon_articles.svg';

export interface SidebarItemType {
  path: string
  text: string // need pass localization key
  Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  authOnly?: boolean
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: AppPaths.main,
    Icon: HomeIcon,
    text: 'mainPage'
  },
  {
    path: AppPaths.about,
    Icon: InfoIcon,
    text: 'aboutPage'
  },
  {
    path: AppPaths.profile,
    Icon: ProfileIcon,
    text: 'profile',
    authOnly: true
  },
  {
    path: AppPaths.articles,
    Icon: ArticlesIcon,
    text: 'articles',
    authOnly: true
  }
];
