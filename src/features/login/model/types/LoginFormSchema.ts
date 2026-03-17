import type { AuthMethodsType } from '@/shared/config';

export interface LoginFormSchema {
  email?: string;
  phone?: string;
  password: string;
  method: AuthMethodsType;

  isLoading: boolean;
  error?: string;
}
