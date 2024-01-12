import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';

export const rootReducer = {
  counter: counterReducer,
  user: userReducer
};
