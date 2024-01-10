import { combineReducers } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { loginReducer } from 'features/AuthByUsername';

export const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
  login: loginReducer
});
