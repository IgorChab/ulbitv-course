import React, {FC, useState} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import styles from './Sidebar.module.scss';
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher/ThemeSwitcher";

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = ({className}) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const collapseSidebar = () => {
        setIsCollapsed(prev => !prev)
    }

    return (
        <div className={classNames(styles.sidebar, {[styles.collapsed]: isCollapsed}, [className])}>
            <button onClick={collapseSidebar}>toggle</button>
            <div className={styles.switchers}>
                <ThemeSwitcher />
            </div>
        </div>
    );
};
