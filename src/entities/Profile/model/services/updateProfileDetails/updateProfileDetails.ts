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

      return response.data;
    } catch (e) {
      rejectWithValue('error');
    }
  }
);
