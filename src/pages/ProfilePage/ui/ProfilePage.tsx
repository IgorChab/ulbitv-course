import React, { type FC, useEffect } from 'react';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  ProfileCard,
  profileReducer,
  fetchProfileDetails
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useParams } from 'react-router-dom';

const ProfilePage: FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>() as { id: string };

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      void dispatch(fetchProfileDetails(id));
    }
  }, [id]);

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
