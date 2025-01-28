import { ProtectedProvider } from '@/app/providers';
import type { LayoutProps } from '@/shared/types';

export default function HomePageLayout({ children }: LayoutProps) {
  return <ProtectedProvider>{children}</ProtectedProvider>;
}
