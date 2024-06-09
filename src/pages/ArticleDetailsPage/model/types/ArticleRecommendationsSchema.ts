import { type Article } from 'entities/Article';
import { type EntityState } from '@reduxjs/toolkit/src/entities/models';

export interface ArticleRecommendationsSchema extends EntityState<Article, string> {
  isLoading: boolean
  error?: string
}
