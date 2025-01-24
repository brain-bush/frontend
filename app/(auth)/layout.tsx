import { AuthRedirectProvider } from '@/app/providers';
import { Flex } from 'antd';
import styles from './layout.module.scss';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthRedirectProvider>
      <Flex
        vertical
        align="center"
        justify="center"
        className={styles.container}>
        <div className={styles.layout}>{children}</div>
      </Flex>
    </AuthRedirectProvider>
  );
}
