import React, { type ButtonHTMLAttributes, type FC, type PropsWithChildren } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import styles from './Button.module.scss';

type ButtonVariant = 'clear' | 'outline';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  variant?: ButtonVariant
  onClick?: () => void | Promise<void>
}

export const Button: FC<PropsWithChildren<ButtonProps>> = React.memo((props) => {
  const {
    className,
    children,
    onClick,
    variant = 'clear',
    disabled,
    ...otherProps
  } = props;

  return (
    <button
      className={classNames(
        styles.button, { [styles.disabled]: !!disabled }, [className, styles[variant]]
      )}
      onClick={onClick}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
});
