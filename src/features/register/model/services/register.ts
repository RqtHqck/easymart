import { createAsyncThunk } from '@reduxjs/toolkit';

import { registerActions } from '@/features/register/model/slice/registerSlice.ts';
import { FormSteps } from '@/features/register/model/types/registerForm.ts';

import { extractErrorMessage, httpClient } from '@/shared/api';

type RegisterArgs = {
  email?: string;
  phone?: string;
  password?: string;
};

export const register = createAsyncThunk<
  void,
  RegisterArgs,
  { rejectValue: string }
>('features/register', async (authData, thunkAPI) => {
  try {
    await httpClient.post('auth/register', authData);
    thunkAPI.dispatch(registerActions.setStep(FormSteps.VERIFICATION));
  } catch (error) {
    thunkAPI.dispatch(registerActions.setStep(FormSteps.CREDENTIALS));
    return thunkAPI.rejectWithValue(extractErrorMessage(error));
  }
});
