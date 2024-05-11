import React, { type FC, type HTMLAttributes, type ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import styles from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children: ReactNode
}

export const Card: FC<CardProps> = ({
  className,
  children,
  ...otherProps
}) => {
  return (
    <div
      className={classNames(styles.card, {}, [className])}
      {...otherProps}
    >
      {children}
    </div>
  );
};
