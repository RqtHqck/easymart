import { selectRegisterStepSelector } from '@/features/register/model/selectors/selectRegisterStep/selectRegisterStep.ts';
import {
  registerActions,
  registerReducer,
  registerSlice,
} from '@/features/register/model/slice/registerSlice.ts';

import {
  FormSteps,
  type FormStepsType,
  type RegisterFormSchema,
} from './model/types/registerForm.ts';

export {
  type RegisterFormSchema,
  registerSlice,
  registerReducer,
  registerActions,
  type FormStepsType,
  FormSteps,
  selectRegisterStepSelector,
};
