import React, { type FC, useEffect } from 'react';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  ProfileCard,
  profileReducer,
  fetchProfileDetails
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

const ProfilePage: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      void dispatch(fetchProfileDetails());
    }
  }, []);

  return (
    <DynamicModuleLoader
      reducers={{
        profile: profileReducer
      }}
      removeAfterUnmount
    >
      <ProfileCard />
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
