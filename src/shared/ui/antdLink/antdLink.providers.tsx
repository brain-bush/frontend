import { ConfigProvider } from 'antd';
import type { DefaultProps } from '../../types';

export const AntdLinkConfigProvider = ({ children }: DefaultProps) => {
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
