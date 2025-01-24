import type { DefaultProps } from '@/shared/types';
import { ReduxProvider } from './redux';
import { AntProvider } from './ant';
import { AuthProvider } from './auth';

export const GlobalProvider = ({ children }: DefaultProps) => (
  <ReduxProvider>
    <AuthProvider>
      <AntProvider>{children}</AntProvider>
    </AuthProvider>
  </ReduxProvider>
);
