import React, { type FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { OptionalRender } from 'shared/ui/OptionalRender/OptionalRender';
import { LoginModal } from 'features/AuthByUsername';

import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();

  const [isOpenModal, setIsOpenModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsOpenModal(prev => !prev);
  }, []);

  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <div className={styles.links}>
        <Button variant="clear" onClick={onToggleModal}>
          {t('login')}
        </Button>
        <OptionalRender condition={isOpenModal}>
          <LoginModal onClose={onToggleModal} />
        </OptionalRender>
      </div>
    </div>
  );
};
