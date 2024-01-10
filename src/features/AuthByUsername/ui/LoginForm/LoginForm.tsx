import React, { type FC, useCallback, useEffect, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { useAppDispatch } from 'app/providers/StoreProvider/config/hooks';
import { useSelector } from 'react-redux';
import { Typography } from 'shared/ui/Typography/Typography';
import { OptionalRender } from 'shared/ui/OptionalRender/OptionalRender';

import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginActions } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const { isLoading, isError } = useSelector(getLoginState);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onChangeUsername = useCallback((value: string) => {
    setUsername(value);
  }, []);

  const onChangePassword = useCallback((value: string) => {
    setPassword(value);
  }, []);

  const onClickLoginButton = useCallback(() => {
    void dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

  useEffect(() => {
    return () => {
      dispatch(loginActions.clearState());
    };
  }, [dispatch]);

  return (
    <div className={classNames(styles.loginForm, {}, [className])}>
      <Typography>
        {t('loginForm')}
      </Typography>
      <Input
        value={username}
        onChange={onChangeUsername}
        label={t('enterUsername')}
        autoFocus
      />
      <Input
        value={password}
        onChange={onChangePassword}
        label={t('enterPassword')}
      />
      <Button
        className={styles.loginButton}
        variant="outline"
        onClick={onClickLoginButton}
        disabled={isLoading}
      >
        {t('login')}
      </Button>
      <OptionalRender condition={isError}>
        <Typography variant="small" className={styles.error}>
          {t('loginError')}
        </Typography>
      </OptionalRender>
    </div>
  );
};
