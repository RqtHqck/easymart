import type { StateSchema } from '@/app/store';

export const selectLoginIsLoadingSelector = (state: StateSchema) =>
  state.loginForm.isLoading;
