'use client';

import type { DefaultProps } from '@/shared/types';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import ruRU from 'antd/lib/locale/ru_RU';

export const AntProvider = ({ children }: DefaultProps) => {
  return (
    <AntdRegistry>
      <ConfigProvider
        locale={ruRU}
        theme={{
          token: {
            fontFamily: `'Inter', sans-serif`,
          },
        }}>
        {children}
      </ConfigProvider>
    </AntdRegistry>
  );
};
