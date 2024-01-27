import { type StateSchema } from 'app/providers/StoreProvider';
import { type ActionCreator, type AsyncThunkAction } from '@reduxjs/toolkit';
import axios, { type AxiosStatic } from 'axios';

type ActionCreatorType<Return, Args, RejectedValue>
  = ActionCreator<AsyncThunkAction<Return, Args, { rejectValue: RejectedValue }>>;

jest.mock('axios');
const mockedAxios = jest.mocked(axios);

export class TestAsyncThunk<Return, Args, RejectedValue> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dispatch: jest.MockedFn<any>;
  getState: () => StateSchema;
  actionCreator: ActionCreatorType<Return, Args, RejectedValue>;
  api: jest.MockedFunctionDeep<AxiosStatic>;

  constructor (actionCreator: ActionCreatorType<Return, Args, RejectedValue>) {
    this.dispatch = jest.fn();
    this.getState = jest.fn();
    this.actionCreator = actionCreator;
    this.api = mockedAxios;
  }

  async callThunk (payload: Args) {
    const action = this.actionCreator(payload);
    const result = await action(this.dispatch, this.getState, {
      api: this.api
    });

    return result;
  }
}
