import React, { type FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { OptionalRender } from 'shared/ui/OptionalRender/OptionalRender';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';

import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const isUserAuth = !!useSelector(getUserAuthData);

  const [isOpenModal, setIsOpenModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsOpenModal(prev => !prev);
  }, []);

  const onClickLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <div className={styles.links}>
        {isUserAuth
          ? (
            <Button variant="clear" onClick={onClickLogout}>
              {t('logout')}
            </Button>
            )
          : (
            <Button variant="clear" onClick={onToggleModal}>
              {t('login')}
            </Button>
            )
        }
        <OptionalRender condition={isOpenModal}>
          <LoginModal onClose={onToggleModal} />
        </OptionalRender>
      </div>
    </div>
  );
};
