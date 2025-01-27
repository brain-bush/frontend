import { ConfigProvider } from 'antd';
import type { AntdLinkConfigProviderProps } from './antdLink.types';

export const AntdLinkConfigProvider = ({
  children,
}: AntdLinkConfigProviderProps) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorLink: '#e4e2e7',
          colorLinkHover: '#e4e2e7',
          colorLinkActive: '#e4e2e7',
        },
      }}>
      {children}
    </ConfigProvider>
  );
};
