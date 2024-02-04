import { createAppAsyncThunk } from 'shared/types/TypedCreateAsyncThunk';
import { profileActions } from 'entities/Profile';
import { apiRoutes } from 'shared/api/apiRoutes';

import { type Profile } from '../../types/ProfileSchema';

export const fetchProfileDetails = createAppAsyncThunk<Profile, undefined, { rejectValue: string }>(
  'profile/fetchProfileDetails',
  async (_, thunkAPI) => {
    const {
      dispatch,
      rejectWithValue,
      extra: { api }
    } = thunkAPI;

    try {
      const response = await api.get<Profile>(apiRoutes.profile);
      dispatch(profileActions.setProfileData(response.data));

      return response.data;
    } catch (err) {
      return rejectWithValue('error');
    }
  }
);
