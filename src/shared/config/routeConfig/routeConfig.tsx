import { type RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';

enum AppRoute {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'notFound'
};

export const AppPaths: Record<AppRoute, string> = {
  [AppRoute.MAIN]: '/',
  [AppRoute.ABOUT]: '/about',
  [AppRoute.NOT_FOUND]: '*'
};

export const routeConfig: Record<AppRoute, RouteProps> = {
  [AppRoute.MAIN]: {
    path: AppPaths.main,
    element: <MainPage />
  },
  [AppRoute.ABOUT]: {
    path: AppPaths.about,
    element: <AboutPage />
  },
  [AppRoute.NOT_FOUND]: {
    path: AppPaths.notFound,
    element: <NotFoundPage />
  }
};
