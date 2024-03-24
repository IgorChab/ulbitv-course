import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { type AppRouteProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';
import { RequireAuth } from 'app/router/ui/RequireAuth';

const renderWithWrapper = ({ path, authOnly, element }: AppRouteProps) => (
  <Route
    key={path}
    path={path}
    element={authOnly ? <RequireAuth>{element}</RequireAuth> : element}
  />
);

const AppRouter = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routeConfig).map(renderWithWrapper)}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
