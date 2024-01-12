import React, { type FC, Suspense, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { OptionalRender } from 'shared/lib/components/OptionalRender/OptionalRender';
import { getIsOpenLoginModal, loginActions, LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { Loader } from 'shared/ui/Loader/Loader';

import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const isUserAuth = !!useSelector(getUserAuthData);
  const isOpenLoginModal = useSelector(getIsOpenLoginModal);

  const onOpenLoginModal = useCallback(() => {
    dispatch(loginActions.setIsOpenLoginModal(true));
  }, []);

  const onCloseLoginModal = useCallback(() => {
    dispatch(loginActions.setIsOpenLoginModal(false));
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
            <Button variant="clear" onClick={onOpenLoginModal}>
              {t('login')}
            </Button>
            )
        }
        <OptionalRender condition={isOpenLoginModal}>
          <Suspense fallback={<Loader />}>
            <LoginModal onClose={onCloseLoginModal} />
          </Suspense>
        </OptionalRender>
      </div>
    </div>
  );
};
