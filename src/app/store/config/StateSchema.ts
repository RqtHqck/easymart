import type { LoginFormSchema } from '@/features/login';
import type { RegisterFormSchema } from '@/features/register';

import type { UserSchema } from '@/entities/user';

//
export interface StateSchema {
  user: UserSchema;
  loginForm: LoginFormSchema;
  registerForm: RegisterFormSchema;
}
