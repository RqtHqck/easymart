import { lazy } from 'react';

export const RegisterPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        // @ts-expect-error Simulate delay
        resolve(import('./RegisterPage'));
      }, 1500);
    }),
);
