import React, { type FC } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';

import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
  onClose?: () => void
}

export const LoginModal: FC<LoginModalProps> = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <LoginForm />
    </Modal>
  );
};
