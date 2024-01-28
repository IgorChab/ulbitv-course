import { type StateSchema } from 'app/providers/StoreProvider';

const profileIsLoading = (state: StateSchema) => state.profile?.isLoading;
const profileError = (state: StateSchema) => state.profile?.error;
const profileData = (state: StateSchema) => state.profile?.data;

export const profileSelectors = {
  profileIsLoading,
  profileError,
  profileData
};
