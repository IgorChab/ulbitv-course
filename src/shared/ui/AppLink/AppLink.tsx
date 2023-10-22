import React, {FC} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import styles from './AppLink.module.scss';
import {Link, LinkProps} from "react-router-dom";

type AppLinkVariant = 'primary' | 'secondary';

interface AppLinkProps extends LinkProps{
    className?: string
    variant?: AppLinkVariant
}

export const AppLink: FC<AppLinkProps> = (props) => {
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
};
