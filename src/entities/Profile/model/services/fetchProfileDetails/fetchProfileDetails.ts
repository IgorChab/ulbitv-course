import { createAppAsyncThunk } from 'shared/types/TypedCreateAsyncThunk';
import { apiRoutes } from 'shared/api/apiRoutes';

import { type Profile } from '../../types/ProfileSchema';

export const fetchProfileDetails = createAppAsyncThunk<Profile, undefined, { rejectValue: string }>(
  'profile/fetchProfileDetails',
  async (_, thunkAPI) => {
    const {
      rejectWithValue,
      extra: { api }
    } = thunkAPI;

    try {
      const response = await api.get<Profile>(apiRoutes.profile);

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (err) {
      return rejectWithValue('error');
    }
  }
);
