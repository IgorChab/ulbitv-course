import React, { type FC, type HTMLAttributes, type ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import styles from './Flex.module.scss';

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children: ReactNode
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'
  align?: 'start' | 'end' | 'center' | 'baseline'
  direction: 'column' | 'row' | 'row-reverse' | 'column-reverse'
  wFull?: boolean
  gap?: 4 | 8 | 16 | 24 | 32
  wrap?: 'wrap' | 'no-wrap'
}

const justifyStylesMap = {
  start: styles.justifyStart,
  end: styles.justifyEnd,
  center: styles.justifyCenter,
  between: styles.justifyBetween,
  around: styles.justifyAround,
  evenly: styles.justifyEvenly
};

const alignStylesMap = {
  start: styles.alignStart,
  end: styles.alignEnd,
  center: styles.alignCenter,
  baseline: styles.alignBaseline
};

const directionStylesMap = {
  column: styles.directionColumn,
  row: styles.directionRow,
  'row-reverse': styles.directionRowReverse,
  'column-reverse': styles.directionColumnReverse
};

const gapStylesMap = {
  4: styles.gap4,
  8: styles.gap8,
  16: styles.gap16,
  24: styles.gap24,
  32: styles.gap32
};

const wrapStylesMap = {
  wrap: styles.wrap,
  'no-wrap': styles.noWrap
};

export const Flex: FC<FlexProps> = ({
  className,
  children,
  gap = 4,
  justify = 'start',
  align = 'start',
  direction,
  wFull,
  wrap = 'no-wrap',
  ...otherProps
}) => {
  const additionalClasses = [
    className,
    justifyStylesMap[justify],
    alignStylesMap[align],
    directionStylesMap[direction],
    gapStylesMap[gap],
    wrapStylesMap[wrap],
    wFull && styles.wFull
  ];

  return (
    <div
      className={classNames(styles.flex, {}, additionalClasses)}
      {...otherProps}
    >
      {children}
    </div>
  );
};
