import React, { type FC } from 'react';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ProfileCard, profileReducer } from 'entities/Profile';

const ProfilePage: FC = () => {
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
