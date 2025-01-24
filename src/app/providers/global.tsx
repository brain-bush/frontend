import type { DefaultProps } from '@/shared/types';
import { ReduxProvider } from './redux';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { AuthProvider } from './auth';

export const GlobalProvider = ({ children }: DefaultProps) => (
  <ReduxProvider>
    <AuthProvider>
      <AntdRegistry>{children}</AntdRegistry>
    </AuthProvider>
  </ReduxProvider>
);
