import type { DefaultProps } from '@/shared/types';
import { ConfigProvider } from 'antd';

export const AuthFormFieldsConfigProvider = ({ children }: DefaultProps) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            colorBgContainer: 'rgba(228, 226, 231, 0.05)',
            colorBorder: 'rgba(228, 226, 231, 0.05)',
            activeBorderColor: 'rgba(228, 226, 231, 0.05)',
            hoverBorderColor: 'rgba(228, 226, 231, 0.05)',
            activeShadow: 'none',
            colorText: 'rgba(228, 226, 231, 0.4)',
            colorTextPlaceholder: 'rgba(228, 226, 231, 0.4)',
            colorIcon: 'rgba(228, 226, 231, 0.4)',
            colorIconHover: 'rgba(228, 226, 231, 0.4)',
          },
        },
      }}>
      {children}
    </ConfigProvider>
  );
};
