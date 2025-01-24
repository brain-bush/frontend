import { Flex } from 'antd';
import styles from './layout.module.scss';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Flex vertical align="center" justify="center" className={styles.container}>
      <div className={styles.layout}>{children}</div>
    </Flex>
  );
}
