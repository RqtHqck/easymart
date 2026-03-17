import type { StateSchema } from '@/app/store';

import { AuthMethods } from '@/shared/config';

export const selectLoginMethodSelector = (state: StateSchema) =>
  state.loginForm.method ?? AuthMethods.EMAIL;
