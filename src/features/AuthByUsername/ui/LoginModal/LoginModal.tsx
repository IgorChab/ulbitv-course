import React, { type FC, Suspense } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { Loader } from 'shared/ui/Loader/Loader';

import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
  onClose?: () => void
}

const LoginModal: FC<LoginModalProps> = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <Suspense fallback={<Loader />}>
        <LoginFormAsync onCloseLoginModal={onClose} />
      </Suspense>
    </Modal>
  );
};

export default LoginModal;
