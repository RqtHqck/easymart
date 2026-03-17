import type { StateSchema } from '@/app/store';

export const selectLoginEmailSelector = (state: StateSchema) =>
  state.loginForm.email ?? '';
