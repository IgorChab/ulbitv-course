import React, { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import ArrowDownIcon from 'shared/assets/icons/icon_arrow_down.svg';

import styles from './ArrowIcon.module.scss';

interface ArrowIconProps extends React.SVGAttributes<SVGElement> {
  className?: string
  direction?: 'left' | 'right' | 'up' | 'down'
}

export const ArrowIcon: FC<ArrowIconProps> = React.memo(({
  className,
  direction = 'down',
  fill,
  ...svgProps
}) => {
  return (
    <ArrowDownIcon
      style={{ fill }}
      className={classNames(styles.arrowIcon, {}, [className, styles[direction]])}
      {...svgProps}
    />
  );
});
