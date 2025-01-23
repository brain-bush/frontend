'use client';

import { Provider } from 'react-redux';
import type { DefaultProps } from '@/shared/types';
import { makeStore } from '../model';
import { useRef } from 'react';

export const ReduxProvider = ({ children }: DefaultProps) => {
  const storeRef = useRef<AppStore | null>(null);

  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};
