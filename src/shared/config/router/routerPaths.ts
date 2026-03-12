export const AppRoutes = {
  HOME: 'home',
  LOGIN: 'login',
  NOT_FOUND: 'not-found',
} as const;

type AppRoutesType = (typeof AppRoutes)[keyof typeof AppRoutes];

export const routePaths: Record<AppRoutesType, string> = {
  [AppRoutes.HOME]: '/',
  [AppRoutes.LOGIN]: '/login',

  // Last
  [AppRoutes.NOT_FOUND]: '*',
};
