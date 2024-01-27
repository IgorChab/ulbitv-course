import { type User, userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/testUtils/TestAsyncThunk';

import { loginByUsername } from './loginByUsername';

describe('loginByUsername tests', () => {
  test('success login', async () => {
    const userData = { id: '1', username: 'admin', password: '123' };

    const thunk = new TestAsyncThunk(loginByUsername);

    thunk.api.post.mockReturnValue(Promise.resolve({ data: userData }));

    const result = await thunk.callThunk({
      username: 'admin',
      password: '123'
    });

    expect(thunk.api.post).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(result.payload as User));
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(result.meta.requestStatus).toBe('fulfilled');
  });

  test('error login', async () => {
    const thunk = new TestAsyncThunk(loginByUsername);

    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk({
      username: 'admin',
      password: 'qwerty'
    });

    expect(thunk.api.post).toHaveBeenCalled();
    expect(thunk.dispatch).not.toHaveBeenCalledWith(
      userActions.setAuthData(result.payload as User)
    );
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('error');
  });
});
