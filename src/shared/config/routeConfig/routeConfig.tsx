import { type RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { ArticlesPage } from 'pages/ActiclesPage';
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';

enum AppRoute {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'article_details',
  NOT_FOUND = 'notFound'
}

export const AppPaths: Record<AppRoute, string> = {
  [AppRoute.MAIN]: '/',
  [AppRoute.ABOUT]: '/about',
  [AppRoute.PROFILE]: '/profile/',
  [AppRoute.ARTICLES]: '/articles',
  [AppRoute.ARTICLE_DETAILS]: '/articles/',
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
    path: `${AppPaths.profile}:id`,
    element: <ProfilePage />,
    authOnly: true
  },
  [AppRoute.ARTICLES]: {
    path: AppPaths.articles,
    element: <ArticlesPage />,
    authOnly: true
  },
  [AppRoute.ARTICLE_DETAILS]: {
    path: `${AppPaths.article_details}:id`,
    element: <ArticleDetailsPage />,
    authOnly: true
  },
  [AppRoute.NOT_FOUND]: {
    path: AppPaths.notFound,
    element: <NotFoundPage />
  }
};
