import React, { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Link, type LinkProps } from 'react-router-dom';

import styles from './AppLink.module.scss';

type AppLinkVariant = 'primary' | 'secondary';

interface AppLinkProps extends LinkProps {
  className?: string
  variant?: AppLinkVariant
}

export const AppLink: FC<AppLinkProps> = React.memo((props) => {
  const {
    className,
    to,
    children,
    variant = 'primary',
    ...otherProps
  } = props;
  return (
    <Link
      to={to}
      className={classNames(styles.appLink, {}, [className, styles[variant]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
});
