'use client';

import { useEffect } from 'react';
import type { DefaultProps } from '@/shared/types';
import { useAppDispatch } from '@/shared/model';
import { actions } from '@/entities/auth';

export const AuthProvider = ({ children }: DefaultProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(actions.refresh());
  }, [dispatch]);

  return children;
};
