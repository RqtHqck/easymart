import { AppRoutes, routePaths } from '@/shared/config';
import type { RouteProps } from 'react-router';
import { LoginPage } from '@/pages/Login';
import { HomePage } from '@/pages/Home';
import { NotFoundPage } from '@/pages';

export const routeConfig: RouteProps[] = [
  {
    path: routePaths[AppRoutes.HOME],
    element: <HomePage />,
  },
  {
    path: routePaths[AppRoutes.LOGIN],
    element: <LoginPage />,
  },
  {
    path: routePaths[AppRoutes.NOT_FOUND],
    element: <NotFoundPage />,
  },
];
