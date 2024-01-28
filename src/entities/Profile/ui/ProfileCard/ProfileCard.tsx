import React, { type FC, useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from 'shared/ui/Typography/Typography';
import { Input } from 'shared/ui/Input/Input';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { profileSelectors } from 'entities/Profile/model/selectors/profileSelectors';
import { Button } from 'shared/ui/Button/Button';

import { fetchProfileDetails } from '../../model/services/fetchProfileDetails/fetchProfileDetails';
import styles from './ProfileCard.module.scss';

export const ProfileCard: FC = () => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();
  const profileData = useSelector(profileSelectors.profileData);

  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    void dispatch(fetchProfileDetails());
  }, []);

  const onClickEditProfile = useCallback(() => {
    setIsEditMode(true);
  }, []);

  return (
    <div>
      <div className={styles.header}>
        <Typography>
          {t('yourProfile')}
        </Typography>
        <Button variant="outline" onClick={onClickEditProfile}>
          {t('editProfile')}
        </Button>
      </div>
      <div className={styles.profileData}>
        <div>
          <Input
            label={t('firstName')}
            value={profileData?.firstName}
            disabled={!isEditMode}
          />
          <Input
            label={t('lastName')}
            value={profileData?.lastName}
            disabled={!isEditMode}
          />
          <Input
            label={t('age')}
            value={profileData?.age}
            disabled={!isEditMode}
          />
          <Input
            label={t('city')}
            value={profileData?.city}
            disabled={!isEditMode}
          />
        </div>
        <div>
          <Input
            label={t('username')}
            value={profileData?.username}
            disabled={!isEditMode}
          />
          <Input
            label={t('avatarUrl')}
            value={profileData?.avatar}
            disabled={!isEditMode}
          />
        </div>
      </div>
    </div>
  );
};
