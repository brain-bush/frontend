'use client';

import { ConfigProvider, Button, Flex, Divider, Input, Typography } from 'antd';
import { UserOutlined, KeyOutlined } from '@ant-design/icons';
import { YA_OAUTH_URL } from '@/entities/auth';
import styles from './authForm.module.scss';
import Link from 'next/link';
import clsx from 'clsx';

const { Paragraph } = Typography;

export const AuthForm: React.FC = () => {
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
      <div>
        <Flex
          vertical
          gap="large"
          className={clsx(styles.block, styles.blockBg)}>
          <label>
            <Paragraph className={styles.labelText}>Логин</Paragraph>
            <Input prefix={<UserOutlined />} placeholder="Ввести" />
          </label>
          <Flex vertical gap="small">
            <label>
              <Paragraph className={styles.labelText}>Пароль</Paragraph>
              <Input.Password prefix={<KeyOutlined />} placeholder="Ввести" />
            </label>
            <Link href={'/refresh'} legacyBehavior passHref>
              <ConfigProvider
                theme={{
                  token: {
                    colorLink: '#e4e2e7',
                    colorLinkHover: '#e4e2e7',
                    colorLinkActive: '#e4e2e7',
                  },
                }}>
                <Typography.Link className={styles.refreshLink}>
                  Забыли пароль?
                </Typography.Link>
              </ConfigProvider>
            </Link>
          </Flex>
        </Flex>
        <Flex vertical gap="large" className={styles.block}>
          <Flex vertical gap="small" align="center">
            <Button block>Войти в аккаунт</Button>
            <Link href={'/register'} legacyBehavior passHref>
              <ConfigProvider
                theme={{
                  token: {
                    colorLink: '#fff',
                    colorLinkHover: '#fff',
                    colorLinkActive: '#fff',
                  },
                }}>
                <Typography.Link>Регистрация</Typography.Link>
              </ConfigProvider>
            </Link>
          </Flex>
          <div className={styles.dividerWrapper}>
            <Divider />
          </div>
          <Flex vertical gap="small">
            <a href={YA_OAUTH_URL}>
              <Button block>Войти при помощи Яндекс</Button>
            </a>
            <Button block>Войти в аккаунт</Button>
          </Flex>
        </Flex>
      </div>
    </ConfigProvider>
  );
};
