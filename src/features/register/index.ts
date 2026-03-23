import {
  registerActions,
  registerReducer,
  registerSlice,
} from '@/features/register/model/slice/registerSlice.ts';

import type { RegisterFormSchema } from './model/types/registerForm.ts';

export {
  type RegisterFormSchema,
  registerSlice,
  registerReducer,
  registerActions,
};
