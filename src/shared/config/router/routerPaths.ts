export const AppRoutes = {
  HOME: 'home',
  LOGIN: 'login',
  REGISTER: 'register',
  NOT_FOUND: 'not-found',
} as const;

type AppRoutesType = (typeof AppRoutes)[keyof typeof AppRoutes];

export const routePaths: Record<AppRoutesType, string> = {
  [AppRoutes.HOME]: '/',
  [AppRoutes.LOGIN]: '/login',
  [AppRoutes.REGISTER]: '/register',

  // Last
  [AppRoutes.NOT_FOUND]: '*',
};
