import type { DefaultProps } from '@/shared/types';
import { ConfigProvider } from 'antd';

export const AuthFormButtonsConfigProvider = ({ children }: DefaultProps) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            defaultBg: '#e4e2e7',
            defaultHoverBg: '#e4e2e7',
            defaultActiveBg: '#e4e2e7',
            defaultColor: '#170f2b',
            defaultHoverColor: 'inherit',
            defaultActiveColor: 'inherit',
            fontWeight: 500,
            defaultHoverBorderColor: 'none',
            defaultActiveBorderColor: 'none',
          },
        },
      }}>
      {children}
    </ConfigProvider>
  );
};
