import { TestAsyncThunk } from 'shared/lib/testUtils/TestAsyncThunk';
import { profileMock } from 'shared/constants/__mocks__/profile';

import { updateProfileDetails } from './updateProfileDetails';

describe('updateProfileDetails thunk tests', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(updateProfileDetails);

    thunk.api.put.mockReturnValue(Promise.resolve({ data: profileMock }));

    const result = await thunk.callThunk(profileMock);

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(profileMock);
  });

  test('error', async () => {
    const thunk = new TestAsyncThunk(updateProfileDetails);

    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk(profileMock);

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('error');
  });
});
