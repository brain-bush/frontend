import { joinPaths } from '@/shared/lib';

export const REDUCER_API_PATH = 'authApi';

export const API_PATH_BASE_SEGMENT = 'auth';

export const API_PATHS = {
  LOGIN: joinPaths(API_PATH_BASE_SEGMENT, 'login'),
  LOGOUT: joinPaths(API_PATH_BASE_SEGMENT, 'logout'),
  REFRESH: joinPaths(API_PATH_BASE_SEGMENT, 'refresh'),
} as const;
