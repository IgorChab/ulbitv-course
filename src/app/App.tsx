import { Sidebar } from 'widgets/Sidebar';
import React, { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/router';
import { Navbar } from 'widgets/Navbar';
import './styles/index.scss';
import { PageError } from 'widgets/PageError';
import { ErrorBoundary } from 'react-error-boundary';

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
