import type { StateSchema } from '@/app/store';

export const selectLoginErrorSelector = (state: StateSchema) =>
  state.loginForm.error;
