import { ProtectedProvider } from '@/app/providers';

export default function HomePageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ProtectedProvider>{children}</ProtectedProvider>;
}
