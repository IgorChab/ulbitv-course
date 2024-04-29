import { createAppAsyncThunk } from 'shared/types/TypedCreateAsyncThunk';

import { type Profile } from '../../types/ProfileSchema';

export const fetchProfileDetails = createAppAsyncThunk<Profile, string, { rejectValue: string }>(
  'profile/fetchProfileDetails',
  async (profileId, thunkAPI) => {
    const {
      rejectWithValue,
      extra: { api }
    } = thunkAPI;

    try {
      const response = await api.get<Profile>(`/profile/${profileId}`);

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (err) {
      return rejectWithValue('error');
    }
  }
);
