import React, {ButtonHTMLAttributes, FC, PropsWithChildren} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import styles from './Button.module.scss';

type ButtonVariant = 'clear';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string
    variant?: ButtonVariant,
}

export const Button: FC<PropsWithChildren<ButtonProps>> = (props) => {
    const {
        className,
        children,
        onClick,
        variant,
    } = props;

    return (
        <button
            className={classNames(styles.button, {}, [className, styles[variant]])}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
