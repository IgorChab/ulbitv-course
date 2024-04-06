import React, { type CSSProperties, type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import styles from './Skeleton.module.scss';

interface SkeletonProps {
  className?: string
  width?: number | `${number}%`
  height?: number | `${number}%`
  borderRadius?: CSSProperties['borderRadius']
  mt?: CSSProperties['marginTop']
  mb?: CSSProperties['marginBottom']
  mr?: CSSProperties['marginRight']
  ml?: CSSProperties['marginLeft']
}

export const Skeleton: FC<SkeletonProps> = ({
  className,
  width,
  height,
  borderRadius,
  ml,
  mt,
  mr,
  mb
}) => {
  return (
    <div
      className={classNames(styles.skeleton, {}, [className])}
      style={{
        width,
        height,
        borderRadius,
        marginLeft: ml,
        marginRight: mr,
        marginBottom: mb,
        marginTop: mt
      }}
    />
  );
};
