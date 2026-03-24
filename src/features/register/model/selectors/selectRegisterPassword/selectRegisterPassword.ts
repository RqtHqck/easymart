import type { StateSchema } from '@/app/store';

export const selectRegisterPasswordSelector = (state: StateSchema) =>
  state.registerForm.password ?? '';
