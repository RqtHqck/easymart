import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { userActions } from '@/entities/user';

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
      const response = await axios.post(
        'http://localhost:3000/auth/login',
        authData,
      );
      const userData = response.data;

      localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(userData));
      thunkApi.dispatch(userActions.setUserData(userData));
      return;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      thunkApi.rejectWithValue('login error');
    }
  },
);
