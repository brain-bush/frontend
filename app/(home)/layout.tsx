import { ProtectedProvider } from '@/app/providers';

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ProtectedProvider>{children}</ProtectedProvider>;
}
