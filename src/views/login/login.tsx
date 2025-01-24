'use client';

import { AuthForm } from '@/widgets/authForm';
import { LoginHeader, LoginFooter } from './ui';
import { ConfigProvider, Divider, Layout } from 'antd';

const { Content } = Layout;

export const Login: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Divider: {
            margin: 0,
            marginLG: 0,
            colorSplit: 'rgba(228, 226, 231, 0.05)',
          },
          Layout: {
            headerPadding: 24,
            headerBg: 'rgba(228, 226, 231, 0.03)',
            footerPadding: 24,
          },
        },
      }}>
      <div>
        <LoginHeader />
        <Divider />
        <Content>
          <AuthForm />
        </Content>
        <LoginFooter />
      </div>
    </ConfigProvider>
  );
};
