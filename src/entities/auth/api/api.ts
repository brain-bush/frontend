import { createApi } from '@reduxjs/toolkit/query/react';
import { API_PATHS, REDUCER_API_PATH } from './constants';
import type { LoginRequest, LoginResponse, RefreshResponse } from '../types';
import { baseQueryWithReauth } from './baseQuery';
import { createApiRequest, METHODS } from '@/shared/api';

const authApi = createApi({
  reducerPath: REDUCER_API_PATH,
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) =>
        createApiRequest({
          url: API_PATHS.LOGIN,
          method: METHODS.POST,
          body: credentials,
        }),
    }),
    logout: builder.mutation<void, void>({
      query: () =>
        createApiRequest({
          url: API_PATHS.LOGOUT,
          method: METHODS.POST,
        }),
    }),
    refresh: builder.mutation<RefreshResponse, void>({
      query: () =>
        createApiRequest({
          url: API_PATHS.REFRESH,
          method: METHODS.GET,
        }),
    }),
  }),
});

const { login, logout, refresh } = authApi.endpoints;

const loginMutation = login.initiate;
const logoutMutation = logout.initiate;
const refreshMutation = refresh.initiate;

export { authApi, loginMutation, logoutMutation, refreshMutation };
