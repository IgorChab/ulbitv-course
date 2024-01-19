import type React from 'react';
import { AppPaths } from 'shared/config/routeConfig/routeConfig';
import HomeIcon from 'shared/assets/icons/icon_home.svg';
import InfoIcon from 'shared/assets/icons/icon_info.svg';
import ProfileIcon from 'shared/assets/icons/icon_profile.svg';

export interface SidebarItemType {
  path: string
  text: string // need pass localization key
  Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>
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
    text: 'profile'
  }
];
