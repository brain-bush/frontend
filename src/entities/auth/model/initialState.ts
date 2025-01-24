import type { AuthState } from '../types';

export const initialState: AuthState = {
  user: null,
  isAuth: false,
  isInit: false,
  status: 'idle',
  errors: [],
};
