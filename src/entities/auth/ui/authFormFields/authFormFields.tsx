'use client';

import { AuthFormFieldsConfigProvider } from './authFormFields.providers';
import { UserOutlined, KeyOutlined } from '@ant-design/icons';
import { Flex, Input, Typography } from 'antd';
import { AntdLink } from '@/shared/ui';
import Link from 'next/link';
import styles from './authFormFields.module.scss';

const { Paragraph } = Typography;

export const AuthFormFields = () => {
  return (
    <AuthFormFieldsConfigProvider>
      <Flex vertical gap="large" className={styles.container}>
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
            <AntdLink className={styles.refreshLink}>Забыли пароль?</AntdLink>
          </Link>
        </Flex>
      </Flex>
    </AuthFormFieldsConfigProvider>
  );
};
