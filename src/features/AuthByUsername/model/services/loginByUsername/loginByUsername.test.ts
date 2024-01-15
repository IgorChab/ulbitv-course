import axios from 'axios';
import { type User, userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/testUtils/TestAsyncThunk';

import { loginByUsername } from './loginByUsername';

jest.mock('axios');
const mockedAxios = jest.mocked(axios);

describe('loginByUsername tests', () => {
  test('success login', async () => {
    const userData = { id: '1', username: 'admin', password: '123' };
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }));

    const thunk = new TestAsyncThunk(loginByUsername);

    const result = await thunk.callThunk({
      username: 'admin',
      password: '123'
    });

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(result.payload as User));
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(result.meta.requestStatus).toBe('fulfilled');
  });

  test('error login', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

    const thunk = new TestAsyncThunk(loginByUsername);

    const result = await thunk.callThunk({
      username: 'admin',
      password: 'qwerty'
    });

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(thunk.dispatch).not.toHaveBeenCalledWith(
      userActions.setAuthData(result.payload as User)
    );
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('error');
  });
});
