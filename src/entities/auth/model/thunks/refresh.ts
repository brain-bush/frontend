import { createAsyncThunk } from '@reduxjs/toolkit';
import { AUTH_REDUCER_PATH } from '../constants';
import { API_PATHS, refreshMutation } from '../../api';
import { joinPaths } from '@/shared/lib';

export const refresh = createAsyncThunk(
  joinPaths(AUTH_REDUCER_PATH, API_PATHS.REFRESH),
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const { error, data } = await dispatch(refreshMutation());

      if (error) {
        return rejectWithValue(error);
      }
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
