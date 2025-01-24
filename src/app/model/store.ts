import { authApi, authReducer, AUTH_REDUCER_PATH } from '@/entities/auth';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const mainReducer = combineReducers({
  [AUTH_REDUCER_PATH]: authReducer,
  [authApi.reducerPath]: authApi.reducer,
});

export const makeStore = () =>
  configureStore({
    reducer: mainReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(authApi.middleware),
  });
