import React, { type ButtonHTMLAttributes, type FC, type PropsWithChildren } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import styles from './Button.module.scss';

type ButtonVariant = 'clear' | 'outline';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  variant?: ButtonVariant
}

export const Button: FC<PropsWithChildren<ButtonProps>> = (props) => {
  const {
    className,
    children,
    onClick,
    variant
  } = props;

  const correctClassVariant = variant && styles[variant];

  return (
    <button
      className={classNames(styles.button, {}, [className, correctClassVariant])}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
