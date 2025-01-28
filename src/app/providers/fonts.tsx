import type { DefaultProps } from '@/shared/types';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
});

export const FontsProvider = ({ children }: DefaultProps) => {
  return <div className={inter.className}>{children}</div>;
};
