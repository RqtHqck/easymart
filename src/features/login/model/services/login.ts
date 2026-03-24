import { createAsyncThunk } from '@reduxjs/toolkit';

import { applyUserSession } from '@/entities/user';

import { extractErrorMessage, httpClient } from '@/shared/api';

type LoginArgs = {
  email?: string;
  phone?: string;
  password?: string;
};

export const login = createAsyncThunk<void, LoginArgs, { rejectValue: string }>(
  'features/login',
  async (authData, thunkAPI) => {
    try {
      const response = await httpClient.post(
        'http://localhost:3000/auth/login',
        authData,
      );
      const userData = response.data;

      applyUserSession(userData, thunkAPI.dispatch);
      return;
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  },
);
