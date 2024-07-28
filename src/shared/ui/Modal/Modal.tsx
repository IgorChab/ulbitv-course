import React, { type FC, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal/Portal';

import styles from './Modal.module.scss';

interface ModalProps {
  className?: string
  children: React.ReactNode
  onClose?: () => void
}

const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
  e.stopPropagation();
};

export const Modal: FC<ModalProps> = ({
  className,
  children,
  onClose
}) => {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose && onClose();
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      removeEventListener('keydown', onKeyDown);
    };
  }, [onClose]);

  return (
    <Portal element={document.body}>
      <div className={classNames(styles.modal, {}, [className])}>
        <div className={styles.backdrop} onClick={onClose}>
          <div className={styles.content} onClick={stopPropagation}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
