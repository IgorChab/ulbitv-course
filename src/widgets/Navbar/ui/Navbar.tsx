import React, { type FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { OptionalRender } from 'shared/lib/components/OptionalRender/OptionalRender';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { Typography } from 'shared/ui/Typography/Typography';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { AppPaths } from 'shared/config/routeConfig/routeConfig';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';

import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [isOpenModal, setIsOpenModal] = useState(false);

  const userData = useSelector(getUserAuthData);

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
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <Typography className={styles.logo} textAlign="center">
        Logo
      </Typography>
      <div className={styles.links}>
        <AppLink to={AppPaths.article_create}>
          {t('createArticle')}
        </AppLink>
      </div>
      {userData
        ? (
          <Dropdown
            items={[
              {
                text: t('profile'),
                href: `${AppPaths.profile}${userData.id}`
              },
              {
                text: t('logout'),
                onClick: onClickLogout
              }
            ]}
            triggerSlot={<Avatar src={userData?.avatar} size={40} />}
          />
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
    </header>
  );
};
