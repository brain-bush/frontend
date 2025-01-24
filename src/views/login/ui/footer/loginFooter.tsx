'use client';

import styles from './loginFooter.module.scss';
import Link from 'next/link';
import { Typography, Layout, ConfigProvider } from 'antd';

const { Paragraph } = Typography;
const { Footer } = Layout;

export const LoginFooter = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorText: 'rgba(228, 226, 231, 0.4)',
          colorLink: 'rgba(228, 226, 231, 0.8)',
          colorLinkHover: 'rgba(228, 226, 231, 0.8)',
          colorLinkActive: 'rgba(228, 226, 231, 0.8)',
          linkDecoration: 'underline',
        },
      }}>
      <Footer className={styles.container}>
        <Paragraph className={styles.policyText}>
          При авторизации Вы автоматически соглашаетесь с&nbsp;
          <Link href={'/'} legacyBehavior passHref>
            <Typography.Link className={styles.policyLink}>
              условиями
            </Typography.Link>
          </Link>
          &nbsp;пользовательского соглашения.
        </Paragraph>
      </Footer>
    </ConfigProvider>
  );
};
