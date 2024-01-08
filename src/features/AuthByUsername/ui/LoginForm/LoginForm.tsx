import React, { type FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

import styles from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
  const { t } = useTranslation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onChangeUsername = (value: string) => {
    setUsername(value);
  };

  const onChangePassword = (value: string) => {
    setPassword(value);
  };

  return (
    <div className={classNames(styles.loginForm, {}, [className])}>
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
      >
        {t('login')}
      </Button>
    </div>
  );
};
