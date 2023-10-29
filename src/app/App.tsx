import React, {Suspense} from 'react';
import './styles/index.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={""}>
                <Navbar />
                <div className="contentPage">
                    <Sidebar />
                    <div className="pageWrapper">
                        <AppRouter />
                    </div>
                </div>
            </Suspense>
        </div>
    );
};

export default App;
