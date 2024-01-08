import { combineReducers } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';

export const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer
});
