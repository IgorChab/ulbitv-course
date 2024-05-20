import React, { type FC, type HTMLAttributes, type ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import styles from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children: ReactNode
  variant?: 'primary' | 'outlined'
}

export const Card: FC<CardProps> = ({
  className,
  children,
  variant = 'primary',
  ...otherProps
}) => {
  return (
    <div
      className={classNames(styles.card, {}, [className, styles[variant]])}
      {...otherProps}
    >
      {children}
    </div>
  );
};
