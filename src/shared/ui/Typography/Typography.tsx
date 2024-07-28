import React, { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import styles from './Typography.module.scss';

interface TypographyProps {
  className?: string
  variant?: 'title' | 'subtitle' | 'small'
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  children: React.ReactNode
  textAlign?: 'left' | 'center' | 'right'
}

const mapSizeToTag: Record<
  Required<TypographyProps>['variant'], Required<TypographyProps>['component']
> = {
  small: 'p',
  subtitle: 'h3',
  title: 'h1'
};

export const Typography: FC<TypographyProps> = React.memo(({
  className,
  component,
  variant = 'title',
  children,
  textAlign = 'left'
}) => {
  const tag = component || mapSizeToTag[variant];

  return React.createElement(
    tag,
    {
      className: classNames('', {}, [className, styles[variant]]),
      style: { textAlign }
    },
    children
  );
});
