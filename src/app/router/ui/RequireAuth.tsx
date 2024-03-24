import React, { type ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AppPaths } from 'shared/config/routeConfig/routeConfig';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';

export const RequireAuth = ({ children }: { children: ReactNode }) => {
  const isUserAuth = !!useSelector(getUserAuthData);
  const location = useLocation();

  if (!isUserAuth) {
    return <Navigate to={AppPaths.main} state={{ from: location }} replace />;
  }

  return children;
};
