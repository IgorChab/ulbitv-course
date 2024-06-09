import { type RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { ArticlesPage } from 'pages/ActiclesPage';
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';
import { ArticleEditPage } from 'pages/ArticleEditPage';

enum AppRoute {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'article_details',
  ARTICLE_CREATE = 'article_create',
  ARTICLE_EDIT = 'article_edit',
  NOT_FOUND = 'notFound'
}

export const AppPaths: Record<AppRoute, string> = {
  [AppRoute.MAIN]: '/',
  [AppRoute.ABOUT]: '/about',
  [AppRoute.PROFILE]: '/profile/',
  [AppRoute.ARTICLES]: '/articles',
  [AppRoute.ARTICLE_DETAILS]: '/articles/',
  [AppRoute.ARTICLE_CREATE]: '/articles/new/',
  [AppRoute.ARTICLE_EDIT]: '/articles/:id/edit',
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
  [AppRoute.ARTICLE_CREATE]: {
    path: AppPaths.article_create,
    element: <ArticleEditPage />,
    authOnly: true
  },
  [AppRoute.ARTICLE_EDIT]: {
    path: AppPaths.article_edit,
    element: <ArticleEditPage />,
    authOnly: true
  },
  [AppRoute.NOT_FOUND]: {
    path: AppPaths.notFound,
    element: <NotFoundPage />
  }
};
