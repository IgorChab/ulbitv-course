import React, { Suspense } from 'react';
import { Sidebar } from 'widgets/Sidebar';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/router';
import { Navbar } from 'widgets/Navbar';
import { PageError } from 'widgets/PageError';
import { ErrorBoundary } from 'react-error-boundary';

import './styles/index.scss';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <ErrorBoundary fallback={<PageError />}>
        <Suspense fallback={''}>
          <Navbar />
          <div className="contentPage">
            <Sidebar />
            <div className="pageWrapper">
              <AppRouter />
            </div>
          </div>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default App;
