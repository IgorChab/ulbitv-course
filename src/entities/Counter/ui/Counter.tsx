/* eslint-disable i18next/no-literal-string */
import React, { type FC } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';

import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

interface CounterProps {
  className?: string
}

export const Counter: FC<CounterProps> = ({ className }) => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid="counterValue">{counterValue}</h1>
      <Button
        data-testid="incrementButton"
        variant='outline'
        onClick={increment}
      >
        increment
      </Button>
      <Button
        data-testid="decrementButton"
        variant='outline'
        onClick={decrement}
      >
        decrement
      </Button>
    </div>
  );
};
