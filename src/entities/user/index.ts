import {
  userActions,
  userReducer,
} from '@/entities/user/model/slice/userSlice.ts';
import type {
  User,
  UserSchema,
} from '@/entities/user/model/types/UserSchema.ts';

export { userReducer, userActions };
export type { User, UserSchema };
