import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { uiReducer } from 'features/UI';

export const rootReducer = {
  counter: counterReducer,
  user: userReducer,
  ui: uiReducer
};
