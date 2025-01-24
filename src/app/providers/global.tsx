import type { DefaultProps } from '@/shared/types';
import { ReduxProvider } from './redux';
import { AntProvider } from './ant';
import { AuthProvider } from './auth';
import { FontsProvider } from './fonts';

export const GlobalProvider = ({ children }: DefaultProps) => (
  <ReduxProvider>
    <AuthProvider>
      <AntProvider>
        <FontsProvider>{children}</FontsProvider>
      </AntProvider>
    </AuthProvider>
  </ReduxProvider>
);
