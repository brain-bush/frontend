import type { DefaultState } from '@/shared/model';
import type { AuthUser } from './authUser';

export type AuthState = DefaultState & {
  user: AuthUser | null;
  isInit: boolean;
};
