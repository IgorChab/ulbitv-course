import { type EntityState } from '@reduxjs/toolkit/src/entities/models';
import { type Article } from 'entities/Article';

export type ArticlesView = 'cell' | 'list';

export interface ArticlesSchema extends EntityState<Article, string> {
  isLoading: boolean
  error?: string
  view: ArticlesView
}
