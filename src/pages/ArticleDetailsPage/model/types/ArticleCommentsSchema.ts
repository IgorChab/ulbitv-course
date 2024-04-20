import { type EntityState } from '@reduxjs/toolkit/src/entities/models';
import { type Comment } from 'entities/Comment';

export interface ArticleCommentsSchema extends EntityState<Comment, string> {
  isLoading: boolean
  error?: string
}
