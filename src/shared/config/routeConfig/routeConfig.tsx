import { type RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';

export enum AppRoute {
  MAIN = 'main',
  ABOUT = 'about',
};

export const AppPaths: Record<AppRoute, string> = {
  [AppRoute.MAIN]: '/',
  [AppRoute.ABOUT]: '/about'
};

export const routeConfig: Record<AppRoute, RouteProps> = {
  [AppRoute.MAIN]: {
    path: AppPaths.main,
    element: <MainPage />
  },
  [AppRoute.ABOUT]: {
    path: AppPaths.about,
    element: <AboutPage />
  }
};
