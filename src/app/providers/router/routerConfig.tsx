import { HomePage, LoginPage } from "@/pages";
import { AppRoutes, routePaths } from "@/shared/config/router";
import type { RouteProps } from "react-router";

export const routeConfig: RouteProps[] = [
  {
    path: routePaths[AppRoutes.HOME],
    element: <HomePage />,
  },
  {
    path: routePaths[AppRoutes.LOGIN],
    element: <LoginPage />,
  },
];
