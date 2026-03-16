import type { AuthProvidersType } from '@/shared/config';

export interface User {
  id: string;
  email?: string;
  phone?: string;
  isVerified?: boolean;
  provider: AuthProvidersType;
  // roles?: string[];
  // isEmailVerified?: boolean;
  // isPhoneVerified?: boolean;
  // isTwoFactorEnabled?: boolean;
}

// Схема юзера это его состояние. Если она undefined, знчит пользователь ен вошёл в аккаунт
export interface UserSchema {
  userData?: User;
  //   currency: CurrencyType;
  //   accessToken?: string;
  //   accessTokenExpiresAt?: string;
  //   pendingMfaChallenge?: {
  //     mfaToken: string;
  //     mfaTokenExpiresAt?: string;
  //     availableMethods?: import('./AuthSession').MfaMethod[];
  //   };
}
