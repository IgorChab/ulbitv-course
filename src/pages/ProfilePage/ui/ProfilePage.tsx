import React, { type FC, useEffect } from 'react';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  ProfileCard,
  profileReducer,
  fetchProfileDetails
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useParams } from 'react-router-dom';

import styles from './ProfilePage.module.scss';

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
      <div className={styles.profilePage}>
        <div className={styles.profileCardContainer}>
          <ProfileCard />
        </div>
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
