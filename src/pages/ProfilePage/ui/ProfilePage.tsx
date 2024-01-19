import React, { type FC } from 'react';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'entities/Profile';
import { useTranslation } from 'react-i18next';

const ProfilePage: FC = () => {
  const { t } = useTranslation();
  return (
    <DynamicModuleLoader
      reducers={{
        profile: profileReducer
      }}
      removeAfterUnmount
    >
      <div>
        {t('profile')}
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
