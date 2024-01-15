import { loginReducer, type LoginSchema } from 'features/AuthByUsername';

import { loginByUsername } from '../services/loginByUsername/loginByUsername';

describe('loginSlice tests', () => {
  test('action loginByUsername.pending should set isLoading=true', () => {
    const state: LoginSchema = {
      isLoading: false,
      isError: false
    };

    const actual = loginReducer(state, { type: loginByUsername.pending.type });

    expect(actual).toEqual({
      isLoading: true,
      isError: false
    });
  });

  test('action loginByUsername.pending should set isError=true', () => {
    const state: LoginSchema = {
      isLoading: false,
      isError: false
    };

    const actual = loginReducer(state, { type: loginByUsername.rejected.type });

    expect(actual).toEqual({
      isLoading: false,
      isError: true
    });
  });
});
