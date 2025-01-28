import { Flex } from 'antd';
import styles from './authLayout.module.scss';
import type { AuthLayoutProps } from './authLayout.types';

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <Flex vertical align="center" justify="center" className={styles.container}>
      <div className={styles.layout}>{children}</div>
    </Flex>
  );
};
