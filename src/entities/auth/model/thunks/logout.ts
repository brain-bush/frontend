import { createAsyncThunk } from '@reduxjs/toolkit';
import { AUTH_REDUCER_PATH } from '../constants';
import { API_PATHS, logoutMutation } from '../../api';
import { joinPaths } from '@/shared/lib';

export const logout = createAsyncThunk(
  joinPaths(AUTH_REDUCER_PATH, API_PATHS.LOGOUT),
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const { error, data } = await dispatch(logoutMutation());

      if (error) {
        return rejectWithValue(error);
      }
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
