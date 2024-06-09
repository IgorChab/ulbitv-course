import { combineReducers } from '@reduxjs/toolkit';

import { articleCommentsReducer } from './articleCommentsSlice';
import { articleRecommendationsReducer } from './articleRecommendationsSlice';

export const articleDetailsPageReducer = combineReducers({
  comments: articleCommentsReducer,
  recommendations: articleRecommendationsReducer
});
