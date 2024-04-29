import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { AppPaths } from 'shared/config/routeConfig/routeConfig';
import HomeIcon from 'shared/assets/icons/icon_home.svg';
import InfoIcon from 'shared/assets/icons/icon_info.svg';
import ProfileIcon from 'shared/assets/icons/icon_profile.svg';
import ArticlesIcon from 'shared/assets/icons/icon_articles.svg';

import { type SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(getUserAuthData, (user) => {
  const sidebarItemsList: SidebarItemType[] = [
    {
      path: AppPaths.main,
      Icon: HomeIcon,
      text: 'mainPage'
    },
    {
      path: AppPaths.about,
      Icon: InfoIcon,
      text: 'aboutPage'
    }
  ];

  if (user) {
    sidebarItemsList.push(
      {
        path: `${AppPaths.profile}${user.id}`,
        Icon: ProfileIcon,
        text: 'profile'
      },
      {
        path: AppPaths.articles,
        Icon: ArticlesIcon,
        text: 'articles'
      }
    );
  }

  return sidebarItemsList;
});
