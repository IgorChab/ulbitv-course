import { type RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';

enum AppRoute {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  NOT_FOUND = 'notFound'
};

export const AppPaths: Record<AppRoute, string> = {
  [AppRoute.MAIN]: '/',
  [AppRoute.ABOUT]: '/about',
  [AppRoute.PROFILE]: '/profile',
  [AppRoute.NOT_FOUND]: '*'
};

export type AppRouteProps = RouteProps & {
  authOnly?: boolean
};

export const routeConfig: Record<AppRoute, AppRouteProps> = {
  [AppRoute.MAIN]: {
    path: AppPaths.main,
    element: <MainPage />
  },
  [AppRoute.ABOUT]: {
    path: AppPaths.about,
    element: <AboutPage />
  },
  [AppRoute.PROFILE]: {
    path: AppPaths.profile,
    element: <ProfilePage />,
    authOnly: true
  },
  [AppRoute.NOT_FOUND]: {
    path: AppPaths.notFound,
    element: <NotFoundPage />
  }
};
