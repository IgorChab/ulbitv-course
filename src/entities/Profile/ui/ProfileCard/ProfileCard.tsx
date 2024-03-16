import React, { type FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button/Button';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { CountrySelect, Country } from 'entities/CountrySelect';
import { CurrencySelect, Currency } from 'entities/CurrencySelect';
import { type Profile, profileSelectors, updateProfileDetails } from 'entities/Profile';
import { Loader } from 'shared/ui/Loader/Loader';
import { Typography } from 'shared/ui/Typography/Typography';
import { useSelector } from 'react-redux';
import { useForm, Controller, type SubmitHandler } from 'react-hook-form';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { OptionalRender } from 'shared/lib/components/OptionalRender/OptionalRender';

import styles from './ProfileCard.module.scss';

export const ProfileCard: FC = () => {
  const { t } = useTranslation('profile');

  const dispatch = useAppDispatch();

  const profileData = useSelector(profileSelectors.profileData);
  const profileError = useSelector(profileSelectors.profileError);
  const isLoading = useSelector(profileSelectors.profileIsLoading);
  const canEditProfile = useSelector(profileSelectors.canEditProfile);

  const [isEditing, setIsEditing] = useState(false);

  const schema = z.object({
    age: z.coerce.number({
      invalid_type_error: t('ageMustBeANumber')
    })
  }).passthrough();

  const {
    control,
    handleSubmit,
    reset,
    formState: { isDirty }
  } = useForm<Profile>({
    defaultValues: {
      firstName: '',
      lastName: '',
      age: 0,
      city: '',
      username: '',
      avatar: '',
      country: Country.UK,
      currency: Currency.EUR
    },
    values: profileData,
    disabled: !isEditing,
    resolver: zodResolver(schema),
    mode: 'onChange'
  });

  const onSubmit: SubmitHandler<Profile> = (data) => {
    void dispatch(updateProfileDetails(data));
  };

  const onEdit = useCallback(() => {
    setIsEditing(true);
  }, []);

  const onCancel = useCallback(() => {
    setIsEditing(false);
    reset();
  }, []);

  const onSave = useCallback(() => {
    setIsEditing(false);
    if (isDirty) {
      void handleSubmit(onSubmit)();
    }
  }, [isDirty]);

  if (isLoading) {
    return (
      <div className={styles.container}>
        <Loader className={styles.loader} />
      </div>
    );
  }

  if (profileError) {
    return (
      <div className={styles.container}>
        <Typography
          variant='subtitle'
          className={styles.error}
          textAlign='center'
        >
          {t('profileError')}
        </Typography>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.leftButtonWrapper}>
          {
            canEditProfile && isEditing && (
              <Button variant="outline" onClick={onCancel}>
                {t('cancel')}
              </Button>
            )
          }
        </div>
        <Avatar src={profileData?.avatar}/>
        <div className={styles.rightButtonWrapper}>
          <OptionalRender condition={canEditProfile}>
            {isEditing
              ? (
                <Button variant="outline" onClick={onSave}>
                  {t('save')}
                </Button>
              )
              : (
                <Button variant="outline" onClick={onEdit}>
                  {t('editProfile')}
                </Button>
            )}
          </OptionalRender>
        </div>
      </div>
      <div className={styles.profileData}>
        <div>
          <Controller
            name="firstName"
            control={control}
            render={({ field }) => (
              <Input
                label={t('firstName')}
                {...field}
              />
            )}
          />
          <Controller
            name="lastName"
            control={control}
            render={({ field }) => (
              <Input
                label={t('lastName')}
                {...field}
              />
            )}
          />
          <Controller
            name="age"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <Input
                label={t('age')}
                errorText={error?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="city"
            control={control}
            render={({ field }) => (
              <Input
                label={t('city')}
                {...field}
              />
            )}
          />
        </div>
        <div>
          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <Input
                label={t('username')}
                {...field}
              />
            )}
          />
          <Controller
            name="avatar"
            control={control}
            render={({ field }) => (
              <Input
                label={t('avatarUrl')}
                {...field}
              />
            )}
          />
          <Controller
            name="country"
            control={control}
            render={({ field }) => (
              <CountrySelect {...field} />
            )}
           />
          <Controller
            name="currency"
            control={control}
            render={({ field }) => (
              <CurrencySelect {...field} />
            )}
           />
        </div>
      </div>
    </div>
  );
};
