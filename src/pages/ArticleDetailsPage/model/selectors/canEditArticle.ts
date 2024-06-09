import { createSelector } from '@reduxjs/toolkit';
import { articleSelectors } from 'entities/Article';
import { getUserId } from 'entities/User';

export const canEditArticleSelector = createSelector(
  articleSelectors.getArticle,
  getUserId,
  (article, userId) => {
    if (!article || !userId) {
      return false;
    }

    return article.id === userId;
  }
);
