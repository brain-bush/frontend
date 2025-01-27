import '@ant-design/v5-patch-for-react-19';
import { GlobalProvider } from '@/app/providers';
import type { LayoutProps } from '@/shared/types';
import 'normalize-scss';
import '../src/app/styles/index.scss';

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="ru">
      <body>
        <GlobalProvider>{children}</GlobalProvider>
      </body>
    </html>
  );
}
