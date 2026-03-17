import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import type { LoginFormSchema } from '@/features/login/model/types/LoginFormSchema.ts';

import { login } from '@/entities/user/model/services/login.ts';

import { AuthMethods, type AuthMethodsType } from '@/shared/config';

const initialState: LoginFormSchema = {
  email: '',
  phone: '',
  password: '',
  isLoading: false,
  error: undefined,
  method: AuthMethods.EMAIL,
};

export const loginSlice = createSlice({
  name: 'loginForm',
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
    resetForm: (state: LoginFormSchema) => {
      state.email = '';
      state.password = '';
      state.phone = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
