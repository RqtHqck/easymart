import type { StateSchema } from '@/app/store';

export const selectRegisterEmailSelector = (state: StateSchema) =>
  state.registerForm.email ?? '';
