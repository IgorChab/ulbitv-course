import React, { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import styles from './Typography.module.scss';

interface TypographyProps {
  className?: string
  variant?: 'title' | 'subtitle' | 'small'
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  children: React.ReactNode
}

export const Typography: FC<TypographyProps> = ({
  className,
  component = 'h1',
  variant = 'title',
  children
}) => {
  return React.createElement(
    component,
    { className: classNames('', {}, [className, styles[variant]]) },
    children
  );
};
