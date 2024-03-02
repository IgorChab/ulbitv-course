import React, { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import styles from './Avatar.module.scss';

interface AvatarProps {
  className?: string
  size?: number
  src?: string
}

export const Avatar: FC<AvatarProps> = React.memo(({
  className,
  size = 100,
  src
}) => {
  return (
    <img
      className={classNames(styles.avatar, {}, [className])}
      style={{ width: size, height: size }}
      src={src}
    />
  );
});
