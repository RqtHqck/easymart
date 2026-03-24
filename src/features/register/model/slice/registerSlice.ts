import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import type { LoginFormSchema } from '@/features/login/model/types/LoginFormSchema.ts';
import { register } from '@/features/register/model/services/register.ts';
import { resendCode } from '@/features/register/model/services/resendCode.ts';
import { verifyCode } from '@/features/register/model/services/verifyCode.ts';
import {
  FormSteps,
  type FormStepsType,
  type RegisterFormSchema,
} from '@/features/register/model/types/registerForm.ts';

import { AuthMethods, type AuthMethodsType } from '@/shared/config';

const initialState: RegisterFormSchema = {
  email: '',
  phone: '',
  password: '',
  isLoading: false,
  error: undefined,
  method: AuthMethods.EMAIL,
  step: FormSteps.CREDENTIALS,
};

export const registerSlice = createSlice({
  name: 'registerForm',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    setMethod: (state, action: PayloadAction<AuthMethodsType>) => {
      state.method = action.payload;
    },
    setStep: (state, action: PayloadAction<FormStepsType>) => {
      state.step = action.payload;
    },
    resetForm: (state: LoginFormSchema) => {
      state.email = '';
      state.password = '';
      state.phone = '';
      state.error = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(resendCode.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(resendCode.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(resendCode.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(verifyCode.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(verifyCode.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(verifyCode.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: registerActions } = registerSlice;
export const { reducer: registerReducer } = registerSlice;
