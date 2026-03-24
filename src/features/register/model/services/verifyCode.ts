import { createAsyncThunk } from '@reduxjs/toolkit';

import { applyUserSession, type User } from '@/entities/user';

import { extractErrorMessage, httpClient } from '@/shared/api';

type VerifyArgs = {
  email?: string;
  phone?: string;
  code: string;
};

export const verifyCode = createAsyncThunk<
  User,
  VerifyArgs,
  { rejectValue: string }
>('features/verifyCode', async (verifyData, thunkAPI) => {
  try {
    const res = await httpClient.post<User>('auth/verify', verifyData);
    const userData = res.data;
    applyUserSession(userData, thunkAPI.dispatch);

    return userData;
  } catch (error) {
    return thunkAPI.rejectWithValue(extractErrorMessage(error));
  }
});
