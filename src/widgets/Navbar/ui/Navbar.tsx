import React, { type FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { OptionalRender } from 'shared/lib/components/OptionalRender/OptionalRender';
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

  const [isOpenModal, setIsOpenModal] = useState(false);

  const isUserAuth = !!useSelector(getUserAuthData);

  const onOpenLoginModal = useCallback(() => {
    setIsOpenModal(true);
  }, []);

  const onCloseLoginModal = useCallback(() => {
    setIsOpenModal(false);
  }, []);

  const onClickLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, []);

  return (
    <header className={classNames(styles.navbar, {}, [className])}>
      <div className={styles.links}>
        {isUserAuth
          ? (
            <Button variant="clear" onClick={onClickLogout}>
              {t('logout')}
            </Button>
            )
          : (
            <Button variant="clear" onClick={onOpenLoginModal}>
              {t('login')}
            </Button>
            )
        }
        <OptionalRender condition={isOpenModal}>
          <LoginModal onClose={onCloseLoginModal} />
        </OptionalRender>
      </div>
    </header>
  );
};
