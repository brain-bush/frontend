import { createAsyncThunk } from '@reduxjs/toolkit';
import type { LoginRequest } from '../../types';
import { AUTH_REDUCER_PATH } from '../constants';
import { loginMutation, API_PATHS } from '../../api';
import { joinPaths } from '@/shared/lib';

export const login = createAsyncThunk(
  joinPaths(AUTH_REDUCER_PATH, API_PATHS.LOGIN),
  async (credentials: LoginRequest, { rejectWithValue, dispatch }) => {
    try {
      const { error, data } = await dispatch(loginMutation(credentials));

      if (error) {
        return rejectWithValue(error);
      }
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
