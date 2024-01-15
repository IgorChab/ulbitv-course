import { type StateSchema } from 'app/providers/StoreProvider';
import { type ActionCreator, type AsyncThunkAction } from '@reduxjs/toolkit';

type ActionCreatorType<Return, Args, RejectedValue>
  = ActionCreator<AsyncThunkAction<Return, Args, { rejectValue: RejectedValue }>>;

export class TestAsyncThunk<Return, Args, RejectedValue> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dispatch: jest.MockedFn<any>;
  getState: () => StateSchema;
  actionCreator: ActionCreatorType<Return, Args, RejectedValue>;

  constructor (actionCreator: ActionCreatorType<Return, Args, RejectedValue>) {
    this.dispatch = jest.fn();
    this.getState = jest.fn();
    this.actionCreator = actionCreator;
  }

  async callThunk (payload: Args) {
    const action = this.actionCreator(payload);
    const result = await action(this.dispatch, this.getState, undefined);

    return result;
  }
}
