import { TestAsyncThunk } from 'shared/lib/testUtils/TestAsyncThunk';
import { profileMock } from 'shared/constants/__mocks__/profile';

import { fetchProfileDetails } from './fetchProfileDetails';

describe('fetchProfileDetails thunk tests', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchProfileDetails);

    thunk.api.get.mockReturnValue(Promise.resolve({ data: profileMock }));

    const result = await thunk.callThunk(undefined);

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(profileMock);
  });

  test('error', async () => {
    const thunk = new TestAsyncThunk(fetchProfileDetails);

    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk(undefined);

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('error');
  });
});
