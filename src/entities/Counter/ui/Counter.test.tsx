import customRender from 'shared/lib/testUtils/customRender';
import { screen, fireEvent } from '@testing-library/react';
import { type DeepPartial } from 'shared/types/DeepPartial';
import { type StateSchema } from 'app/providers/StoreProvider';

import { Counter } from './Counter';

describe('Counter component tests', () => {
  test('render correctly', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 }
    };

    customRender(<Counter />, { initialState: state });

    const counterValue = screen.getByTestId('counterValue');

    expect(counterValue).toHaveTextContent('10');
  });

  test('increment value', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 }
    };

    customRender(<Counter />, { initialState: state });

    const counterValue = screen.getByTestId('counterValue');
    const incrementButton = screen.getByTestId('incrementButton');

    fireEvent.click(incrementButton);

    expect(counterValue).toHaveTextContent('11');
  });

  test('decrement value', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 }
    };

    customRender(<Counter />, { initialState: state });

    const counterValue = screen.getByTestId('counterValue');
    const decrementButton = screen.getByTestId('decrementButton');

    fireEvent.click(decrementButton);

    expect(counterValue).toHaveTextContent('9');
  });
});
