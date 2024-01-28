import { type User, userActions } from 'entities/User';
import { LocalStorageKeys } from 'shared/constants/LocalStorageKeys';
import { createAppAsyncThunk } from 'shared/types/TypedCreateAsyncThunk';
import { apiRoutes } from 'shared/api/apiRoutes';

interface Payload {
  username: string
  password: string
}

export const loginByUsername = createAppAsyncThunk<User, Payload, { rejectValue: string }>(
  'login/loginByUsername',
  async (payload, thunkAPI) => {
    const {
      dispatch,
      rejectWithValue,
      extra: {
        api
      }
    } = thunkAPI;

    const {
      username,
      password
    } = payload;

    try {
      const response = await api.post<User>(apiRoutes.login, {
        username,
        password
      });

      if (!response.data) {
        throw new Error('Data is empty');
      }

      dispatch(userActions.setAuthData(response.data));
      localStorage.setItem(LocalStorageKeys.AUTH_USER, JSON.stringify(response.data));

      return response.data;
    } catch (err) {
      return rejectWithValue('error');
    }
  }
);
