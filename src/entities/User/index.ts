import { type User, type UserSchema } from './model/types/UserSchema';
import {
  userActions,
  userReducer
} from './model/slice/userSlice';
import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
import { getUserId } from './model/selectors/getUserId/getUserId';

export {
  type User,
  type UserSchema,
  userActions,
  userReducer,
  getUserAuthData,
  getUserId
};
