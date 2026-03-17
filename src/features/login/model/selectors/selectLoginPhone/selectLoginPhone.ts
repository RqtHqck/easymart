import type { StateSchema } from '@/app/store';

export const selectLoginPhoneSelector = (state: StateSchema) =>
  state.loginForm.phone ?? '';
