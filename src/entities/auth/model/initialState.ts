import type { AuthState } from '../types';

export const initialState: AuthState = {
  user: null,
  isInit: false,
  status: 'idle',
  errors: [],
};
