import { AuthRedirectProvider } from '@/app/providers';
import { AuthLayout } from '@/shared/ui/authLayout';
import type { LayoutProps } from '@/shared/types';

export default function AuthPageLayout({ children }: LayoutProps) {
  return (
    <AuthRedirectProvider>
      <AuthLayout>{children}</AuthLayout>
    </AuthRedirectProvider>
  );
}
