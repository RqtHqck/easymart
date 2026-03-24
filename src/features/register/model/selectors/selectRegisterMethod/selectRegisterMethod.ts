import type { StateSchema } from '@/app/store';

import { AuthMethods } from '@/shared/config';

export const selectRegisterMethodSelector = (state: StateSchema) =>
  state.registerForm.method ?? AuthMethods.EMAIL;
