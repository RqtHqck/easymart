import type { StateSchema } from '@/app/store';

export const selectRegisterPhoneSelector = (state: StateSchema) =>
  state.registerForm.phone ?? '';
