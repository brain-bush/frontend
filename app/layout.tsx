import '@ant-design/v5-patch-for-react-19';
import { GlobalProvider } from '@/app/providers';
import 'normalize-scss';
import '../src/app/styles/index.scss';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <GlobalProvider>{children}</GlobalProvider>
      </body>
    </html>
  );
}
