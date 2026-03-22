import { createAsyncThunk } from '@reduxjs/toolkit';

import { userActions } from '@/entities/user';

import { httpClient } from '@/shared/api';
import { LOCAL_STORAGE_USER_KEY } from '@/shared/config';

type LoginArgs = {
  email?: string;
  phone?: string;
  password?: string;
};

export const login = createAsyncThunk<void, LoginArgs, { rejectValue: string }>(
  'features/login',
  async (authData, thunkApi) => {
    try {
      const response = await httpClient.post(
        'http://localhost:3000/auth/login',
        authData,
      );
      const userData = response.data;

      localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(userData));
      thunkApi.dispatch(userActions.setUserData(userData));
      return;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return thunkApi.rejectWithValue('login error');
    }
  },
);
