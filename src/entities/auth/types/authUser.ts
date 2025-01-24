import type { User } from '@/entities/user';

export type AuthUser = Pick<
  User,
  'nickname' | 'firstName' | 'lastName' | 'avatar'
>;
