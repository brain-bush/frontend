import { AuthRedirectProvider } from '@/app/providers';
import { AuthLayout } from '@/shared/ui';

export default function AuthPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthRedirectProvider>
      <AuthLayout>{children}</AuthLayout>
    </AuthRedirectProvider>
  );
}
