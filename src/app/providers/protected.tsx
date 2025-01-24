'use client';

import type { DefaultProps } from '@/shared/types';
import { useAppSelector } from '@/shared/model';
import { selectors } from '@/entities/auth';
import { useRouter } from 'next/navigation';
import { ROUTER_PATHS } from '@/shared/constants';
import { useEffect } from 'react';

export const ProtectedProvider = ({ children }: DefaultProps) => {
  const { push } = useRouter();
  const isAuth = useAppSelector(selectors.getIsAuth);

  useEffect(() => {
    if (!isAuth) {
      push(ROUTER_PATHS.HOME + ROUTER_PATHS.LOGIN);
    }
  }, [isAuth, push]);

  if (!isAuth) {
    return null;
  }

  return children;
};
