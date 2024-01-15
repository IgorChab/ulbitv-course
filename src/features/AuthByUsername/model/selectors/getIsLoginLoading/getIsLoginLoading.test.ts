import { type DeepPartial } from 'shared/types/DeepPartial';
import { type StateSchema } from 'app/providers/StoreProvider';

import { getIsLoginError } from '../getIsLoginError/getIsLoginError';
import { getIsLoginLoading } from './getIsLoginLoading';

describe('getIsLoginLoading', () => {
  test('should return isLoading state', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        isLoading: true
      }
    };

    expect(getIsLoginLoading(state as StateSchema)).toEqual(true);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getIsLoginError(state as StateSchema)).toEqual(undefined);
  });
});
