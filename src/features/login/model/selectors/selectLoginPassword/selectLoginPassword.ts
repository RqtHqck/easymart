import type { StateSchema } from '@/app/store';

export const selectLoginPasswordSelector = (state: StateSchema) =>
  state.loginForm.password ?? '';
