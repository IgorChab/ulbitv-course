import { counterActions, counterReducer, type CounterSchema } from 'entities/Counter';

describe('counterSlice tests', () => {
  test('increment action', () => {
    const state: CounterSchema = {
      value: 10
    };

    expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 });
  });

  test('decrement action', () => {
    const state: CounterSchema = {
      value: 10
    };

    expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 });
  });

  test('should work with initial state ', () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
  });
});
