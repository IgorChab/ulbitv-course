import React, { type FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { useAppDispatch } from 'app/providers/StoreProvider/config/hooks';
import { useSelector } from 'react-redux';
import { Typography } from 'shared/ui/Typography/Typography';
import { OptionalRender } from 'shared/lib/components/OptionalRender/OptionalRender';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

import { getIsLoginError } from '../../model/selectors/getIsLoginError/getIsLoginError';
import { loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import styles from './LoginForm.module.scss';
import { getIsLoginLoading } from '../../model/selectors/getIsLoginLoading/getIsLoginLoading';

interface LoginFormProps {
  className?: string
  onCloseLoginModal?: () => void
}

const initialReducers = {
  login: loginReducer
};

const LoginForm: FC<LoginFormProps> = ({ className, onCloseLoginModal }) => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const isError = !!useSelector(getIsLoginError);
  const isLoading = !!useSelector(getIsLoginLoading);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onChangeUsername = useCallback((value: string) => {
    setUsername(value);
  }, []);

  const onChangePassword = useCallback((value: string) => {
    setPassword(value);
  }, []);

  const onClickLoginButton = useCallback(() => {
    void dispatch(loginByUsername({ username, password, onCloseLoginModal }));
  }, [dispatch, username, password]);

  return (
    <DynamicModuleLoader
      reducers={initialReducers}
      removeAfterUnmount
    >
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
    </DynamicModuleLoader>
  );
};

export default LoginForm;
