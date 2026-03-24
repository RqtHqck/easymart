import type { StateSchema } from '@/app/store';

export const selectRegisterStepSelector = (state: StateSchema) =>
  state.registerForm?.step;
