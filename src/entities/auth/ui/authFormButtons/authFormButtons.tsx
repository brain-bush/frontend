'use client';

import { AuthFormButtonsConfigProvider } from './authFormButtons.providers';
import { Button, Flex, Divider } from 'antd';
import { YA_OAUTH_URL } from '../../constants';
import { AntdLink } from '@/shared/ui';
import Link from 'next/link';
import styles from './authFormButtons.module.scss';

export const AuthFormButtons = () => {
  return (
    <AuthFormButtonsConfigProvider>
      <Flex vertical gap="large" className={styles.container}>
        <Flex vertical gap="small" align="center">
          <Button block>Войти в аккаунт</Button>
          <Link href={'/register'} legacyBehavior passHref>
            <AntdLink className={styles.registerLink}>Регистрация</AntdLink>
          </Link>
        </Flex>
        <div className={styles.dividerWrapper}>
          <Divider />
        </div>
        <Flex vertical gap="small">
          <Link href={YA_OAUTH_URL} legacyBehavior passHref>
            <Button block>Войти при помощи Яндекс</Button>
          </Link>
          <Button block>Войти в аккаунт</Button>
        </Flex>
      </Flex>
    </AuthFormButtonsConfigProvider>
  );
};
