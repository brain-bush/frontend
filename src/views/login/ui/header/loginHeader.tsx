import { Typography, Layout, ConfigProvider } from 'antd';
import styles from './loginHeader.module.scss';

const { Title } = Typography;
const { Header } = Layout;

export const LoginHeader = () => {
  return (
    <Header className={styles.container}>
      <ConfigProvider
        theme={{
          token: {
            colorText: '#e4e2e7',
          },
        }}>
        <Title level={5} className={styles.title}>
          Авторизация
        </Title>
      </ConfigProvider>
    </Header>
  );
};
