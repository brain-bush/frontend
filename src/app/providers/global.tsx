import type { DefaultProps } from '@/shared/types';
import { ReduxProvider } from './redux';
import { AntdProvider } from './antd';
import { AuthProvider } from './auth';
import { FontsProvider } from './fonts';

export const GlobalProvider = ({ children }: DefaultProps) => (
  <ReduxProvider>
    <AuthProvider>
      <AntdProvider>
        <FontsProvider>{children}</FontsProvider>
      </AntdProvider>
    </AuthProvider>
  </ReduxProvider>
);
