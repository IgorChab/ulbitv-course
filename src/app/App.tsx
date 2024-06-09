import React, { Suspense, useEffect } from 'react';
import { Sidebar } from 'widgets/Sidebar';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/router';
import { Navbar } from 'widgets/Navbar';
import { PageError } from 'widgets/PageError';
import { ErrorBoundary } from 'react-error-boundary';
import { userActions } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

import './styles/index.scss';

const App = () => {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, []);

  return (
    <div className={classNames('app', {}, [theme])}>
      <ErrorBoundary fallback={<PageError />}>
        <Suspense fallback={''}>
          <Navbar />
          <div className="contentPage">
            <Sidebar />
            <AppRouter />
          </div>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default App;
