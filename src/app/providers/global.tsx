import type { DefaultProps } from '@/shared/types';
import { ReduxProvider } from './redux';
import { AntdRegistry } from '@ant-design/nextjs-registry';

export const GlobalProvider = ({ children }: DefaultProps) => (
  <ReduxProvider>
    <AntdRegistry>{children}</AntdRegistry>
  </ReduxProvider>
);
