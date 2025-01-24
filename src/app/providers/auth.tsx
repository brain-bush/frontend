'use client';

import { useEffect } from 'react';
import type { DefaultProps } from '@/shared/types';
import { useAppDispatch, useAppSelector } from '@/shared/model';
import { actions, selectors } from '@/entities/auth';

export const AuthProvider = ({ children }: DefaultProps) => {
  const dispatch = useAppDispatch();
  const isInit = useAppSelector(selectors.getIsInit);

  useEffect(() => {
    dispatch(actions.refresh());
  }, [dispatch]);

  if (!isInit) {
    return null;
  }

  return children;
};
