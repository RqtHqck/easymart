import type { StateSchema } from '@/app/store';

export const selectRegisterErrorSelector = (state: StateSchema) =>
  state.registerForm.error;
