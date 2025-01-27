import { PolicyAgreement } from '@/shared/ui';
import { Layout } from 'antd';
import styles from './loginFooter.module.scss';

const { Footer } = Layout;

export const LoginFooter = () => {
  return (
    <Footer className={styles.container}>
      <PolicyAgreement context="login" />
    </Footer>
  );
};
