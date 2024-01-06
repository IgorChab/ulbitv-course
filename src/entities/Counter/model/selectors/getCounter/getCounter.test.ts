import { getCounter } from 'entities/Counter/model/selectors/getCounter/getCounter';
import { type StateSchema } from 'app/providers/StoreProvider';
import { type DeepPartial } from 'shared/types/DeepPartial';

describe('getCounter selector tests', () => {
  test('should return counter state', () => {
    const state: DeepPartial<StateSchema> = {
      counter: {
        value: 10
      }
    };

    expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
  });
});
