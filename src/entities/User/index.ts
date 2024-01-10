import { type User, type UserSchema } from './model/types/UserSchema';
import {
  userActions,
  userReducer
} from './model/slice/userSlice';
import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';

export {
  type User,
  type UserSchema,
  userActions,
  userReducer,
  getUserAuthData
};
