import type { DefaultProps } from '@/shared/types';
import { ReduxProvider, AntProvider } from './';

export const GlobalProvider = ({ children }: DefaultProps) => (
  <ReduxProvider>
    <AntProvider>{children}</AntProvider>
  </ReduxProvider>
);
