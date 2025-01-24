import { AuthRedirectProvider } from '@/app/providers';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AuthRedirectProvider>{children}</AuthRedirectProvider>;
}
