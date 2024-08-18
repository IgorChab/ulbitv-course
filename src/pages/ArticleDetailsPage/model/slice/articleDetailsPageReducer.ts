import { combineReducers } from '@reduxjs/toolkit';

import { articleCommentsReducer } from './articleCommentsSlice';

export const articleDetailsPageReducer = combineReducers({
  comments: articleCommentsReducer
});
