import type { StateSchema } from '@/app/store';

export const selectRegisterIsLoadingSelector = (state: StateSchema) =>
  state.registerForm.isLoading;
