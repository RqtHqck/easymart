import type { LoginFormSchema } from '@/features/login';

import type { UserSchema } from '@/entities/user';

//
export interface StateSchema {
  user: UserSchema;
  loginForm: LoginFormSchema;
}
