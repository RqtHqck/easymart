import {createAsyncThunk} from "@reduxjs/toolkit";

import {type User, userActions} from "@/entities/user";

import {httpClient} from "@/shared/api";
import {LOCAL_STORAGE_USER_KEY} from "@/shared/config";

export const refreshSession = createAsyncThunk<void, void, {rejectValue: string}>('user/refreshSession',
  async (_, thunkApi) => {
  try {
    const res = await httpClient.post<User>("/auth/refresh");
    const userData = res.data;
    localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(userData));
    thunkApi.dispatch(userActions.setUserData(userData));
    return;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    thunkApi.dispatch(userActions.clearUserData());
    return thunkApi.rejectWithValue("refresh error")
  }
  }
)