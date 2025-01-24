import type { DefaultProps } from '../../types/defaultProps';
import { Flex } from 'antd';
import styles from './authLayout.module.scss';

export const AuthLayout = ({ children }: DefaultProps) => {
  return (
    <Flex vertical align="center" justify="center" className={styles.container}>
      <div className={styles.layout}>{children}</div>
    </Flex>
  );
};
