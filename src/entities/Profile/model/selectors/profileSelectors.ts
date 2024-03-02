import { type StateSchema } from 'app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';
import { getUserId } from 'entities/User';

const profileIsLoading = (state: StateSchema) => state.profile?.isLoading;
const profileError = (state: StateSchema) => state.profile?.error;
const profileData = (state: StateSchema) => state.profile?.data;
const profileDataId = (state: StateSchema) => state.profile?.data?.id;
const canEditProfile = createSelector(
  getUserId, profileDataId,
  (authUserId, profileUserId) => {
    return authUserId === profileUserId;
});

export const profileSelectors = {
  profileIsLoading,
  profileError,
  profileData,
  canEditProfile
};
