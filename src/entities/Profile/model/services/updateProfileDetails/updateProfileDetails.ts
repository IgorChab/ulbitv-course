import { createAppAsyncThunk } from 'shared/types/TypedCreateAsyncThunk';

import { type Profile } from '../../types/ProfileSchema';

export const updateProfileDetails = createAppAsyncThunk<Profile, Profile, { rejectValue: string }>(
  'profile/updateProfileDetails',
  async (data, thunkAPI) => {
    const {
      rejectWithValue,
      extra: { api }
    } = thunkAPI;

    try {
      const response = await api.put('/profile', data);

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      return rejectWithValue('error');
    }
  }
);
